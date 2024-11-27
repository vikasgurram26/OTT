import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RecommendedHeaderProps {
  videos: Video[];
}

export const RecommendedHeader: React.FC<RecommendedHeaderProps> = ({ videos }) => {
  const recommendedVideos = videos.filter(video => video.recommended);

  const scrollLeft = () => {
    const container = document.getElementById('recommended-scroll');
    if (container) {
      container.scrollLeft -= container.offsetWidth;
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('recommended-scroll');
    if (container) {
      container.scrollLeft += container.offsetWidth;
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
      
      <div className="relative">
        <div
          id="recommended-scroll"
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {recommendedVideos.map((video) => (
            <div
              key={video.id}
              className="flex-none w-full snap-start"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-4xl font-bold text-white mb-4">{video.title}</h2>
                  <p className="text-gray-200 mb-6 max-w-xl">{video.description}</p>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700">
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};