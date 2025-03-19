import { useEffect, useState } from 'react';
import { Camera, Palette, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import HobbyCarousel from './HobbyCarousel';

// Define the Slide type to match what HobbyCarousel expects
interface Slide {
  image?: string;
  title: string;
  description: string;
  fitVertical?: boolean; // Add property for vertical fitting
  youtubeEmbed?: string; // Add YouTube embed URL
}

export default function Hobbies() {
  const [activeHobby, setActiveHobby] = useState<string>('photography');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const hobbies = {
    photography: {
      title: 'Wildlife Photography',
      icon: <Camera className="w-5 h-5" />,
      description: 'Wildlife photography is my profound connection to the beauty of the natural world. Local photowalks in Ambazari Biodiversity Park,in Nagpur India focused on capturing birds, used to serve as a therapeutic escape, offering stress relief amid the serene surroundings. Each click of the camera freezes moments in time, immortalizing the elegance and majesty of the diverse creatures inhabiting our planet. Through this art form, I find solace and a renewed appreciation for the delicate balance of nature.',
      socialLink: {
        url: 'https://www.instagram.com/hobby_clicks_/',
        platform: 'instagram'
      },
      slides: [
        { 
          image: 'images/slides/wildlife/1.JPG',
          title: 'Happy is as Happy Does',
          description: 'A cheerful deer I captured at Pench National Park, India'
        },
        { 
          image: 'images/slides/wildlife/2.JPG',
          title: 'Blessed in Sunlight',
          description: 'A majestic deer basking in the sun at Pench National Park, India'
        },
        { 
          image: 'images/slides/wildlife/3.JPG',
          title: 'Silent and Watchful',
          description: 'A sly fox I spotted at Tadoba Tiger Reserve, India'
        },
        { 
          image: 'images/slides/wildlife/4.JPG',
          title: 'Silent and Serene',
          description: 'A beautiful forest patch at Pench Tiger Reserve, India'
        },
        { 
          image: 'images/slides/wildlife/5.JPG',
          title: 'Gateway to Heaven',
          description: 'A diving pathway that seems to lead into heaven'
        },
        { 
          image: 'images/slides/wildlife/6.JPG',
          title: 'Tiny World',
          description: 'A tiny little squirell friend I met at Ambazari Biodiversity Park, India'
        },
        { 
          image: 'images/slides/wildlife/7.JPG',
          title: 'Houston, We have a Takeoff',
          description: 'The great Indian Cormorant taking off at Ambazari Biodiversity Park, India'
        },
        { 
          image: 'images/slides/wildlife/9.JPG',
          title: 'Spirit of the Wild',
          description: 'A domesticated cat that appears anything but domesticated'
        },
        { 
          image: 'images/slides/wildlife/10.JPG',
          title: 'Whats Up Doc?',
          description: 'A cool lizard'
        },
        { 
          image: 'images/slides/wildlife/11.JPG',
          title: 'Titanic 2.0',
          description: 'The Great Indian Cormorant striking a Titanic pose'
        },
        { 
          image: 'images/slides/wildlife/12.JPG',
          title: 'The Beetle and the Grass',
          description: '2 Beetles chilling on a grass blade'
        },
        { 
          image: 'images/slides/wildlife/13.JPG',
          title: 'Strawberry Pink',
          description: 'A Beautiful Strawbery Finch I spotted at Ambazari Biodiversity Park, India'
        },
        { 
          image: 'images/slides/wildlife/14.JPG',
          title: 'Come Closer',
          description: 'A curious little Owlet !'
        },
        { 
          image: 'images/slides/wildlife/15.JPG',
          title: 'The Hero we Need',
          description: 'A tiny little hummingbird I spotted at Ambazari Biodiversity Park, India'
        },
        { 
          image: 'images/slides/wildlife/16.JPG',
          title: 'New Beginings',
          description: 'A female Paradise Flycatcher watching her offspring try to fly'
        },
        { 
          image: 'images/slides/wildlife/17.JPG',
          title: '10 Points to Slytherin',
          description: 'A noodle tryinh to be a snake'
        },
      ],
    },
    painting: {
      title: 'Painting',
      icon: <Palette className="w-5 h-5" />,
      description: 'Painting is like my personal playground of colors and creativity, and I absolutely love how it doubles as the ultimate stress-buster. When I grab a canvas and let loose with a paintbrush, its like giving my imagination free rein. Theres something magical about watching random strokes turn into a meaningful picture right before my eyes.',
      socialLink: {
        url: 'https://www.instagram.com/hobby__arts/',
        platform: 'instagram'
      },
      fitVertical: true,
      slides: [
        { 
          image: 'images/slides/painting/1.png',
          title: 'Moon and Cherry',
          description: '',
          fitVertical: true
        },
        { 
          image: 'images/slides/painting/2.png',
          title: 'Sukuna',
          description: 'From Anime Jujutsu Kaisen',
          fitVertical: true
        },
        { 
          image: 'images/slides/painting/3.png',
          title: 'Shhh! ',
          description: 'Dexter from the series Dexter',
          fitVertical: true
        },
        { 
          image: 'images/slides/painting/4.png',
          title: 'Blossoms',
          description: '',
          fitVertical: true
        },
        { 
          image: 'images/slides/painting/5.png',
          title: 'Under the Stars',
          description: '',
          fitVertical: true
        },
        { 
          image: 'images/slides/painting/6.png',
          title: 'Duality',
          description: '',
          fitVertical: true
        },
        { 
          image: 'images/slides/painting/7.png',
          title: 'The Red Ribbon',
          description: '',
          fitVertical: true
        },
      ],
    },
    animation: {
      title: '3D Animation',
      icon: <Video className="w-5 h-5" />,
      description: 'Its mind-blowing to think about the incredible world of Blender animation, especially when you consider that one can learn everything about it through YouTube tutorials. The fact that one can go from knowing nothing to creating dynamic, eye-catching animations and have the power to convert their imagination to tangible video product simply by watching online videos is nothing short of amazing.',
      socialLink: {
        url: 'https://www.youtube.com/@sudhanvapaturkar',
        platform: 'youtube'
      },
      slides: [
        { 
          youtubeEmbed: 'https://www.youtube.com/embed/n7Vtl7SVC9s?si=AWIyBM97DHwas-IQ',
          title: 'DocOc',
          description: 'A animation in blender inspired by Doctor Otto Octavius from Spiderman'
        },
        { 
          youtubeEmbed: 'https://www.youtube.com/embed/QNLCzkhY6sw?si=uiecJMVA24g7joQv',
          title: 'Tokyo Drift',
          description: 'A realistic car modelled in blender and animated to drift'
        },
        { 
          youtubeEmbed: 'https://www.youtube.com/embed/MU80wJgEbD0?si=mdqILvlyExfbT7J2',
          title: 'Aragog',
          description: 'Named after Hagrids pet spider, a robotic creature I created in Blender'
        },
        { 
          youtubeEmbed: 'https://www.youtube.com/embed/O0iQPv13BXE?si=h0BD9OBMO78T_pss',
          title: 'In Sync',
          description: 'A satisfying render of a perfect system ! '
        },
      ],
    },
  };

  return (
    <section id="hobbies" className="section">
      <div className="container mx-auto">
        <div className="mb-16 animate-on-scroll text-center">
          <h2 className="section-heading">Hobbies !</h2>
        </div>
        
        <div className="flex justify-center mb-10 animate-on-scroll">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 xs:grid-cols-1">
            {(Object.keys(hobbies)).map((hobby) => (
              <button
                key={hobby}
                onClick={() => setActiveHobby(hobby)}
                className={cn(
                  "glass-panel py-4 px-6 rounded-xl flex flex-col items-center gap-2 transition-all duration-300",
                  activeHobby === hobby 
                    ? "bg-primary/10 border-primary/50" 
                    : "hover:bg-foreground/5"
                )}
              >
                <div 
                  className={cn(
                    "p-2 rounded-full",
                    activeHobby === hobby ? "text-primary" : "text-foreground/70"
                  )}
                >
                  {hobbies[hobby].icon}
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  activeHobby === hobby ? "text-primary" : "text-foreground/70"
                )}>
                  {hobbies[hobby].title}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8 animate-on-scroll">
          {/* Pass the hobby key to maintain independent slide states */}
          <HobbyCarousel 
            slides={hobbies[activeHobby].slides}
            fitVertical={hobbies[activeHobby]?.fitVertical}
            hobbyKey={activeHobby} // This is the key fix - passing a unique key for each hobby
          />
          
          {/* Text section with social link button - modified for mobile responsiveness */}
          <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border/20 animate-on-scroll">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-medium mb-2">{hobbies[activeHobby].title}</h3>
              <p className="text-foreground/80 mb-6">{hobbies[activeHobby].description}</p>
              <a 
                href={hobbies[activeHobby].socialLink.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors mt-4 md:mt-0 w-full md:w-auto max-w-xs"
              >
                {hobbies[activeHobby].socialLink.platform === 'instagram' ? (
                  <>
                    <img src="icons/instagram.svg" alt="instagram" className="blueFilter mr-2 w-5 h-5" />
                    <span>Follow on Instagram</span>
                  </>
                ) : (
                  <>
                    <img src="https://cdn.worldvectorlogo.com/logos/youtube-icon-5.svg" alt="youtube" className="blueFilter mr-2 w-5 h-5" />
                    <span>Watch on YouTube</span>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}