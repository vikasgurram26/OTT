import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../types';

interface VideoGridProps {
  videos: Video[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full aspect-video object-cover"
      />
      {video.progress !== undefined && video.progress > 0 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
          <div 
            className="h-full bg-red-600"
            style={{ width: `${video.progress}%` }}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 w-full">
          <div className="flex items-center space-x-2 mb-2">
            <Play className="w-8 h-8 text-red-600" />
            <span className="text-white text-sm">{video.duration}</span>
          </div>
          <h3 className="text-white font-semibold truncate">{video.title}</h3>
          {video.genre && (
            <div className="flex flex-wrap gap-2 mt-2">
              {video.genre.map((g) => (
                <span key={g} className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                  {g}
                </span>
              ))}
            </div>
          )}
          <div className="text-gray-400 text-xs mt-1">
            {video.views.toLocaleString()} views • {video.uploadDate}
          </div>
        </div>
      </div>
    </div>
  );
};