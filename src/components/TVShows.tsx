import React, { useState, useMemo } from 'react';
import { videos } from '../data/sampleData';
import { VideoGrid } from './VideoGrid';
import { CategoryFilter } from './CategoryFilter';

export const TVShows = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  
  const tvShows = useMemo(() => 
    videos.filter(video => video.category === 'tv'),
    []
  );
  
  const filteredShows = useMemo(() => 
    selectedGenre === 'All'
      ? tvShows
      : tvShows.filter(video => video.genre?.includes(selectedGenre)),
    [tvShows, selectedGenre]
  );

  const genres = ['All', 'Drama', 'Comedy', 'Reality', 'News', 'Mystery'];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">TV Shows</h1>
        <CategoryFilter 
          categories={genres}
          selectedCategory={selectedGenre}
          onCategorySelect={setSelectedGenre}
        />
      </div>
      {filteredShows.length > 0 ? (
        <VideoGrid videos={filteredShows} />
      ) : (
        <div className="text-center text-gray-400 py-12">
          No TV shows found in this category.
        </div>
      )}
    </div>
  );
};