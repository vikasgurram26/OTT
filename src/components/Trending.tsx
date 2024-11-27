import React from 'react';
import { videos } from '../data/sampleData';
import { VideoGrid } from './VideoGrid';

export const Trending = () => {
  const trendingVideos = videos.filter(video => video.trending);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Trending Now</h1>
      <VideoGrid videos={trendingVideos} />
    </div>
  );
};