import { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface Video {
  youtubeId: string;
  title: string;
  description: string;
}

interface HobbySection {
  id: string;
  title: string;
  images?: string[];
  videos?: Video[];
  socialLink: {
    url: string;
    platform: 'instagram' | 'youtube';
    text: string;
    icon: React.ReactNode;
  };
  description?: string;
}

export default function Hobbies() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const hobbySections: HobbySection[] = [
    {
      id: 'photography',
      title: 'Wildlife Photography',
      images: [
        'images/slides/wildlife/1.JPG',
        'images/slides/wildlife/2.JPG',
        'images/slides/wildlife/3.JPG',
        'images/slides/wildlife/6.JPG',
        'images/slides/wildlife/7.JPG',
        'images/slides/wildlife/13.JPG',
        'images/slides/wildlife/14.JPG',
        'images/slides/wildlife/15.JPG',
        'images/slides/wildlife/11.JPG',
        'images/slides/wildlife/16.JPG',
      ],
      socialLink: {
        url: 'https://www.instagram.com/hobby_clicks_/',
        platform: 'instagram',
        text: 'hobby_clicks_',
        icon: <Instagram className="w-5 h-5" />
      },
      description: 'Capturing the beauty of nature and wildlife'
    },
    {
      id: 'painting',
      title: 'Painting',
      images: [
        'images/slides/painting/1.png',
        'images/slides/painting/2.png',
        'images/slides/painting/3.png',
        'images/slides/painting/4.png',
        'images/slides/painting/5.png',
        'images/slides/painting/6.png',
        'images/slides/painting/7.png',
        'images/slides/painting/8.png',
      ],
      socialLink: {
        url: 'https://www.instagram.com/hobby__arts/',
        platform: 'instagram',
        text: 'hobby__arts',
        icon: <Instagram className="w-5 h-5" />
      },
      description: 'Creating art through colors and imagination'
    },
    {
      id: 'animation',
      title: '3D Animation',
      videos: [
        {
          youtubeId: 'n7Vtl7SVC9s',
          title: 'DocOc',
          description: 'A animation in blender inspired by Doctor Otto Octavius from Spiderman'
        },
        { 
          youtubeId: 'QNLCzkhY6sw',
          title: 'Tokyo Drift',
          description: 'A realistic car modelled in blender and animated to drift'
        },
        { 
          youtubeId: 'MU80wJgEbD0',
          title: 'Aragog',
          description: 'Named after Hagrids pet spider, a robotic creature I created in Blender'
        },
        { 
          youtubeId: 'O0iQPv13BXE',
          title: 'In Sync',
          description: 'A satisfying render of a perfect system!'
        },
      ],
      socialLink: {
        url: 'https://www.youtube.com/@sudhanvapaturkar',
        platform: 'youtube',
        text: 'sudhanvapaturkar',
        icon: <YouTubeIcon style={{ fontSize: '1.25rem' }} />
      },
      description: 'Bringing ideas to life with 3D animations in Blender'
    }
  ];

  return (
    <>
      {hobbySections.map((hobby, index) => (
        <div key={hobby.id} className="snap-section">
          <HobbySection
            hobby={hobby}
            index={index}
            totalSections={hobbySections.length}
            onImageClick={setSelectedImage}
            onVideoClick={setSelectedVideo}
          />
        </div>
      ))}

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImagePreviewModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>

      {/* Video Preview Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <VideoPreviewModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

interface HobbySectionProps {
  hobby: HobbySection;
  index: number;
  totalSections: number;
  onImageClick: (image: string) => void;
  onVideoClick: (video: Video) => void;
}

function HobbySection({ hobby, index, totalSections, onImageClick, onVideoClick }: HobbySectionProps) {
  return (
    <div className="min-h-screen h-screen flex items-center justify-center py-16 md:py-20 px-8 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto max-w-7xl h-full flex flex-col"
      >
        {/* Header with Title and Follow Button */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 flex-shrink-0">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
              {hobby.title}
            </h3>
            {hobby.description && (
              <p className="text-xs sm:text-base text-foreground/70">
                {hobby.description}
              </p>
            )}
          </div>

          {/* Follow Button */}
          <a
            href={hobby.socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105",
              hobby.socialLink.platform === 'instagram'
                ? "bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white"
                : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
            )}
          >
            {hobby.socialLink.icon}
            <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
              {hobby.socialLink.text}
            </span>
          </a>
        </div>

        {/* Image/Video Collage */}
        <div className="flex-1 relative rounded-2xl overflow-hidden bg-background/30 backdrop-blur-sm border border-border/20 p-4 sm:p-6">
          {hobby.images ? (
            <ImageCollage
              images={hobby.images}
              hobbyId={hobby.id}
              onImageClick={onImageClick}
            />
          ) : hobby.videos ? (
            <VideoCollage
              videos={hobby.videos}
              hobbyId={hobby.id}
              onVideoClick={onVideoClick}
            />
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}

interface ImageCollageProps {
  images: string[];
  hobbyId: string;
  onImageClick: (image: string) => void;
}

function ImageCollage({ images, hobbyId, onImageClick }: ImageCollageProps) {
  const getMobileImageStyle = (index: number) => {
    // Mobile: Overlapping collage in 2-column layout
    const patterns = [
      { width: '46%', top: '2%', left: '2%', zIndex: 10, rotate: -4 },
      { width: '48%', top: '5%', right: '1%', zIndex: 9, rotate: 5 },
      { width: '47%', top: '22%', left: '4%', zIndex: 8, rotate: 3 },
      { width: '46%', top: '26%', right: '3%', zIndex: 7, rotate: -5 },
      { width: '48%', top: '44%', left: '1%', zIndex: 6, rotate: 4 },
      { width: '47%', top: '48%', right: '2%', zIndex: 5, rotate: -3 },
      { width: '46%', top: '66%', left: '3%', zIndex: 4, rotate: 5 },
      { width: '48%', top: '70%', right: '1%', zIndex: 3, rotate: -4 },
      { width: '47%', top: '88%', left: '2%', zIndex: 2, rotate: 3 },
      { width: '46%', top: '92%', right: '3%', zIndex: 1, rotate: -5 },
    ];

    return patterns[index] || patterns[0];
  };

  const getDesktopImageStyle = (index: number) => {
    // Desktop: Non-overlapping collage patterns with rotation
    const patterns = [
      { width: '30%', height: '38%', top: '3%', left: '3%', zIndex: 10, rotate: -5 },
      { width: '32%', height: '40%', top: '2%', left: '36%', zIndex: 9, rotate: 4 },
      { width: '30%', height: '38%', top: '4%', right: '3%', zIndex: 8, rotate: 6 },
      { width: '31%', height: '36%', top: '44%', left: '2%', zIndex: 7, rotate: -6 },
      { width: '30%', height: '38%', top: '43%', left: '35%', zIndex: 6, rotate: 3 },
      { width: '32%', height: '37%', top: '45%', right: '3%', zIndex: 5, rotate: -4 },
      { width: '33%', height: '35%', bottom: '2%', left: '4%', zIndex: 4, rotate: 5 },
      { width: '31%', height: '37%', bottom: '1%', left: '38%', zIndex: 3, rotate: -3 },
      { width: '30%', height: '36%', bottom: '3%', right: '4%', zIndex: 2, rotate: 7 },
      { width: '28%', height: '34%', top: '22%', right: '35%', zIndex: 1, rotate: -7 },
    ];

    return patterns[index] || patterns[0];
  };

  return (
    <>
      {/* Mobile: Overlapping collage in 2-column layout */}
      <div className="relative sm:hidden w-full h-full overflow-y-auto scrollbar-thin">
        {images.map((image, index) => {
          const style = getMobileImageStyle(index);
          return (
            <motion.div
              key={`${hobbyId}-mobile-${index}`}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: style.rotate 
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => onImageClick(image)}
              className="absolute rounded-lg overflow-hidden shadow-xl border-3 border-background cursor-pointer hover:border-primary/50 transition-colors"
              style={{
                width: style.width,
                aspectRatio: '3/2',
                top: style.top,
                left: style.left,
                right: style.right,
                zIndex: style.zIndex,
              }}
            >
              <img
                src={image}
                alt={`${hobbyId} ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: Scattered collage */}
      <div className="hidden sm:block relative w-full h-full">
        {images.map((image, index) => {
          const style = getDesktopImageStyle(index);
          return (
            <motion.div
              key={`${hobbyId}-desktop-${index}`}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: style.rotate 
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                scale: 1.15, 
                zIndex: 100,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onClick={() => onImageClick(image)}
              className="absolute rounded-lg overflow-hidden shadow-2xl border-4 border-background cursor-pointer hover:border-primary/50 transition-colors"
              style={{
                width: style.width,
                height: style.height,
                top: style.top,
                left: style.left,
                right: style.right,
                bottom: style.bottom,
                zIndex: style.zIndex,
              }}
            >
              <img
                src={image}
                alt={`${hobbyId} ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

interface VideoCollageProps {
  videos: Video[];
  hobbyId: string;
  onVideoClick: (video: Video) => void;
}

function VideoCollage({ videos, hobbyId, onVideoClick }: VideoCollageProps) {
  const getMobileVideoStyle = (index: number) => {
    // Mobile: Overlapping videos in 2-column layout, centered and close together
    const patterns = [
      { width: '48%', top: '20%', left: '2%', zIndex: 4, rotate: -4 },
      { width: '48%', top: '23%', right: '2%', zIndex: 3, rotate: 5 },
      { width: '48%', top: '48%', left: '2%', zIndex: 2, rotate: 4 },
      { width: '48%', top: '51%', right: '2%', zIndex: 1, rotate: -4 },
    ];

    return patterns[index] || patterns[0];
  };

  const getDesktopVideoStyle = (index: number) => {
    const patterns = [
      { width: '46%', height: '48%', top: '4%', left: '4%', zIndex: 4, rotate: -5 },
      { width: '46%', height: '48%', top: '4%', right: '4%', zIndex: 3, rotate: 5 },
      { width: '46%', height: '48%', bottom: '4%', left: '4%', zIndex: 2, rotate: 4 },
      { width: '46%', height: '48%', bottom: '4%', right: '4%', zIndex: 1, rotate: -4 },
    ];

    return patterns[index] || patterns[0];
  };

  return (
    <>
      {/* Mobile: Overlapping videos */}
      <div className="relative sm:hidden w-full h-full overflow-y-auto scrollbar-thin">
        {videos.map((video, index) => {
          const style = getMobileVideoStyle(index);
          const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
          
          return (
            <motion.div
              key={`${hobbyId}-mobile-${index}`}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: style.rotate 
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
              onClick={() => onVideoClick(video)}
              className="absolute rounded-lg overflow-hidden shadow-xl border-3 border-background cursor-pointer hover:border-red-500/50 transition-colors group"
              style={{
                width: style.width,
                aspectRatio: '16/9',
                top: style.top,
                left: style.left,
                right: style.right,
                zIndex: style.zIndex,
              }}
            >
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Desktop: Scattered collage */}
      <div className="hidden sm:block relative w-full h-full">
        {videos.map((video, index) => {
          const style = getDesktopVideoStyle(index);
          const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
          
          return (
            <motion.div
              key={`${hobbyId}-desktop-${index}`}
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: style.rotate 
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
              whileHover={{ 
                scale: 1.1, 
                zIndex: 100,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onClick={() => onVideoClick(video)}
              className="absolute rounded-lg overflow-hidden shadow-2xl border-4 border-background cursor-pointer hover:border-red-500/50 transition-colors group"
              style={{
                width: style.width,
                height: style.height,
                top: style.top,
                left: style.left,
                right: style.right,
                bottom: style.bottom,
                zIndex: style.zIndex,
              }}
            >
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
            </div>
          </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

// Image Preview Modal
interface ImagePreviewModalProps {
  image: string;
  onClose: () => void;
}

function ImagePreviewModal({ image, onClose }: ImagePreviewModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-lg"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
        aria-label="Close preview"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.img
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt="Preview"
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

// Video Preview Modal
interface VideoPreviewModalProps {
  video: Video;
  onClose: () => void;
}

function VideoPreviewModal({ video, onClose }: VideoPreviewModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-lg"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
        aria-label="Close video"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg shadow-2xl"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">{video.title}</h3>
          <p className="text-sm text-foreground/70 mt-1">{video.description}</p>
      </div>
      </motion.div>
    </motion.div>
  );
}
