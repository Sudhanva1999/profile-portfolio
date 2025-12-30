import { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  icon: string;
  strat?: 'dark' | 'light';
  category: string;
}

interface SkillNodeProps {
  skill: Skill;
  position: [number, number, number];
}

function SkillNode({ skill, position }: SkillNodeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.05;
      
      // Scale on hover or click
      const targetScale = (hovered || clicked) ? 1.4 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setClicked(!clicked);
  };

  const handlePointerOver = () => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHovered(true);
  };

  const handlePointerOut = () => {
    // Delay hiding the label by 5 seconds
    hoverTimeoutRef.current = setTimeout(() => {
      setHovered(false);
      hoverTimeoutRef.current = null;
    }, 5000);
  };

  const showLabel = hovered || clicked;

  return (
    <group ref={groupRef} position={position}>
      <Html
        center
        distanceFactor={6}
        zIndexRange={[100, 100]}
        style={{ cursor: 'pointer', pointerEvents: 'auto' }}
      >
        <div className="flex flex-col items-center">
          <div 
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg hover:shadow-xl transition-all"
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            onClick={handleClick}
            onTouchEnd={handleClick}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-6 h-6 md:w-8 md:h-8 object-contain pointer-events-none"
              style={{
                filter: skill.strat === 'dark' ? 'invert(1)' : 'none'
              }}
            />
          </div>
          {showLabel && (
            <div className="mt-2 px-2 py-1 bg-background/90 backdrop-blur-sm border border-border rounded shadow-lg whitespace-nowrap pointer-events-none">
              <span className="text-xs font-medium">{skill.name}</span>
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

function CategoryLines({ positions, color }: { positions: [number, number, number][]; color: string }) {
  const lines = useMemo(() => {
    if (positions.length < 2) return [];
    
    const lineSegments: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    // Connect each skill to its nearest neighbors in the category
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = Math.sqrt(
          Math.pow(positions[i][0] - positions[j][0], 2) +
          Math.pow(positions[i][1] - positions[j][1], 2) +
          Math.pow(positions[i][2] - positions[j][2], 2)
        );
        // Only connect if they're close enough (increased threshold for spread out skills)
        if (dist < 2.8) {
          lineSegments.push({
            start: new THREE.Vector3(...positions[i]),
            end: new THREE.Vector3(...positions[j])
          });
        }
      }
    }
    return lineSegments;
  }, [positions]);

  return (
    <>
      {lines.map((line, index) => {
        // Create a tube geometry for much thicker lines
        const path = new THREE.LineCurve3(line.start, line.end);
        const tubeGeometry = new THREE.TubeGeometry(path, 1, 0.02, 8, false); // 0.02 radius = much thicker
        
        return (
          <mesh key={index} geometry={tubeGeometry}>
            <meshBasicMaterial 
              color={color} 
              transparent 
              opacity={0.5}
            />
          </mesh>
        );
      })}
    </>
  );
}

function SkillsScene({ skillsByCategory }: { skillsByCategory: { [key: string]: Skill[] } }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  // Category colors
  const categoryColors: Record<string, string> = {
    Languages: '#ef4444',
    Frameworks: '#06b6d4',
    Databases: '#34d399',
    Other: '#f472b6',
  };

  // Cluster skills by category with full sphere coverage - divide into 4 quarters
  const { skillPositions, categoryPositionMap } = useMemo(() => {
    const positions: [number, number, number][] = [];
    const positionMap: Record<string, [number, number, number][]> = {
      Languages: [],
      Frameworks: [],
      Databases: [],
      Other: [],
    };
    const radius = 3.5;
    const minDistance = 0.65; // Minimum distance between icons
    
    // Divide sphere into 4 quarters - each category gets a quarter
    // Using theta (horizontal) and phi (vertical) ranges
    const categoryQuarters: Record<string, { 
      thetaMin: number; thetaMax: number; 
      phiMin: number; phiMax: number;
    }> = {
      // Quarter 1: Front-Top (upper right hemisphere)
      Languages: { 
        thetaMin: -Math.PI / 4, 
        thetaMax: Math.PI / 2, 
        phiMin: Math.PI / 6, 
        phiMax: Math.PI * 2 / 3 
      },
      // Quarter 2: Back-Top (upper left hemisphere)  
      Frameworks: { 
        thetaMin: Math.PI / 2, 
        thetaMax: Math.PI * 5 / 4,
        phiMin: Math.PI / 6, 
        phiMax: Math.PI * 2 / 3 
      },
      // Quarter 3: Front-Bottom (lower right hemisphere)
      Databases: { 
        thetaMin: -Math.PI / 4, 
        thetaMax: Math.PI / 2,
        phiMin: Math.PI * 2 / 3, 
        phiMax: Math.PI * 5 / 6 
      },
      // Quarter 4: Back-Bottom (lower left hemisphere)
      Other: { 
        thetaMin: Math.PI / 2, 
        thetaMax: Math.PI * 5 / 4,
        phiMin: Math.PI * 2 / 3, 
        phiMax: Math.PI * 5 / 6 
      },
    };

    // Helper function to check if position is too close to existing positions
    const isTooClose = (newPos: [number, number, number], existingPositions: [number, number, number][]) => {
      return existingPositions.some(pos => {
        const dist = Math.sqrt(
          Math.pow(newPos[0] - pos[0], 2) +
          Math.pow(newPos[1] - pos[1], 2) +
          Math.pow(newPos[2] - pos[2], 2)
        );
        return dist < minDistance;
      });
    };

    Object.entries(skillsByCategory).forEach(([category, skills]) => {
      const quarter = categoryQuarters[category];
      
      skills.forEach((_, i) => {
        let attempts = 0;
        let position: [number, number, number];
        
        // Try to find a non-overlapping position within the quarter
        do {
          // Evenly distribute skills across the quarter
          const gridSize = Math.ceil(Math.sqrt(skills.length));
          const row = Math.floor(i / gridSize);
          const col = i % gridSize;
          
          // Calculate position within the quarter range
          const thetaRange = quarter.thetaMax - quarter.thetaMin;
          const phiRange = quarter.phiMax - quarter.phiMin;
          
          const thetaNorm = (col + 0.5) / gridSize; // 0 to 1
          const phiNorm = (row + 0.5) / gridSize;   // 0 to 1
          
          // Add some randomness for organic look
          const theta = quarter.thetaMin + thetaNorm * thetaRange + (Math.random() - 0.5) * 0.2;
          const phi = quarter.phiMin + phiNorm * phiRange + (Math.random() - 0.5) * 0.2;

          const x = radius * Math.sin(phi) * Math.cos(theta);
          const y = radius * Math.cos(phi);
          const z = radius * Math.sin(phi) * Math.sin(theta);

          position = [x, y, z];
          attempts++;
        } while (isTooClose(position, positions) && attempts < 50);

        positions.push(position);
        positionMap[category].push(position);
      });
    });

    return { skillPositions: positions, categoryPositionMap: positionMap };
  }, [skillsByCategory]);

  // Flatten skills for rendering
  const allSkills = useMemo(() => {
    return Object.values(skillsByCategory).flat();
  }, [skillsByCategory]);

  return (
    <group ref={groupRef}>
      {/* Transparent wireframe sphere */}
      <mesh>
        <sphereGeometry args={[3.5, 32, 32]} />
        <meshBasicMaterial
          color="#666"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Category connection lines */}
      {Object.entries(categoryPositionMap).map(([category, positions]) => (
        <CategoryLines
          key={category}
          positions={positions}
          color={categoryColors[category]}
        />
      ))}

      {/* Skill nodes */}
      {allSkills.map((skill, index) => (
        <SkillNode
          key={index}
          skill={skill}
          position={skillPositions[index]}
        />
      ))}

      {/* Ambient light */}
      <ambientLight intensity={0.8} />
      
      {/* Point lights for better illumination */}
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} />
    </group>
  );
}

interface SkillsSphereProps {
  skills: {
    languages: Skill[];
    frameworks: Skill[];
    databases: Skill[];
    other: Skill[];
  };
}

export default function SkillsSphere({ skills }: SkillsSphereProps) {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Organize skills by category
  const skillsByCategory = useMemo(() => ({
    Languages: skills.languages.map(s => ({ ...s, category: 'Languages' })),
    Frameworks: skills.frameworks.map(s => ({ ...s, category: 'Frameworks' })),
    Databases: skills.databases.map(s => ({ ...s, category: 'Databases' })),
    Other: skills.other.map(s => ({ ...s, category: 'Other' })),
  }), [skills]);

  // Prevent scroll wheel from zooming the canvas, allow page scroll instead
  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Don't prevent default - allow normal page scrolling
      // The canvas wheel events will be blocked by not propagating
      e.stopPropagation();
    };

    const canvas = container.querySelector('canvas');
    if (canvas) {
      canvas.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div ref={canvasContainerRef} className="w-full h-[350px] md:h-[500px] relative">
        <Canvas
          camera={{ position: [0, 0, isMobile ? 10 : 8], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <SkillsScene skillsByCategory={skillsByCategory} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minDistance={6}
            maxDistance={14}
            autoRotate
            autoRotateSpeed={0.5}
            mouseButtons={{
              LEFT: THREE.MOUSE.ROTATE,
              MIDDLE: THREE.MOUSE.DOLLY,
              RIGHT: THREE.MOUSE.ROTATE
            }}
            touches={{
              ONE: THREE.TOUCH.ROTATE,
              TWO: THREE.TOUCH.DOLLY_ROTATE
            }}
            enableDamping
            dampingFactor={0.05}
            zoomSpeed={0.8}
            rotateSpeed={0.8}
            zoomToCursor={false}
          />
        </Canvas>

        {/* Legend - Desktop only (positioned on globe) */}
        <div className="hidden md:block absolute bottom-4 left-4 glass-panel p-4 rounded-lg">
          <h4 className="text-sm font-semibold mb-2">Categories</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-xs">Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-xs">Frameworks</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs">Databases</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-400" />
              <span className="text-xs">Other</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legend - Mobile only (below globe in single line) */}
      <div className="md:hidden w-full mt-4 px-4">
        <div className="glass-panel p-3 rounded-lg">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-xs">Languages</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              <span className="text-xs">Frameworks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs">Databases</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-pink-400" />
              <span className="text-xs">Other</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

