import React from 'react';
import { videos } from '../data/sampleData';
import { VideoGrid } from './VideoGrid';

export const Watchlist = () => {
  const watchlistVideos = videos.filter(video => video.inWatchlist);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">My Watchlist</h1>
      {watchlistVideos.length > 0 ? (
        <VideoGrid videos={watchlistVideos} />
      ) : (
        <div className="text-gray-400 text-center py-12">
          Your watchlist is empty. Add some videos to watch later!
        </div>
      )}
    </div>
  );
};