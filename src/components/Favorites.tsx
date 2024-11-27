import React from 'react';
import { videos } from '../data/sampleData';
import { VideoGrid } from './VideoGrid';

export const Favorites = () => {
  const favoriteVideos = videos.filter(video => video.favorite);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">My Favorites</h1>
      {favoriteVideos.length > 0 ? (
        <VideoGrid videos={favoriteVideos} />
      ) : (
        <div className="text-gray-400 text-center py-12">
          No favorite videos yet. Mark some videos as favorites!
        </div>
      )}
    </div>
  );
};