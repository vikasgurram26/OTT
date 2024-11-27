import React, { useState } from 'react';
import { videos } from '../data/sampleData';
import { VideoGrid } from './VideoGrid';
import { CategoryFilter } from './CategoryFilter';

export const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const movieVideos = videos.filter(video => video.category === 'movie');
  
  const filteredVideos = selectedGenre === 'All'
    ? movieVideos
    : movieVideos.filter(video => video.genre?.includes(selectedGenre));

  const genres = ['All', 'Action', 'Drama', 'Comedy', 'Documentary', 'Romance'];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Movies</h1>
        <CategoryFilter 
          categories={genres}
          selectedCategory={selectedGenre}
          onCategorySelect={setSelectedGenre}
        />
      </div>
      <VideoGrid videos={filteredVideos} />
    </div>
  );
};