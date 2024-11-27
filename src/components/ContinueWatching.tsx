import React from 'react';
import { videos } from '../data/sampleData';
import { VideoGrid } from './VideoGrid';

export const ContinueWatching = () => {
  const continueWatchingVideos = videos.filter(video => video.progress && video.progress > 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Continue Watching</h1>
      {continueWatchingVideos.length > 0 ? (
        <VideoGrid videos={continueWatchingVideos} />
      ) : (
        <div className="text-gray-400 text-center py-12">
          No videos in progress. Start watching something!
        </div>
      )}
    </div>
  );
};