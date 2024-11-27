import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { VideoGrid } from './components/VideoGrid';
import { VideoPlayer } from './components/VideoPlayer';
import { Movies } from './components/Movies';
import { TVShows } from './components/TVShows';
import { Trending } from './components/Trending';
import { Watchlist } from './components/Watchlist';
import { ContinueWatching } from './components/ContinueWatching';
import { Favorites } from './components/Favorites';
import { RecommendedHeader } from './components/RecommendedHeader';
import { videos } from './data/sampleData';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-16 md:ml-64">
            <Routes>
              <Route path="/" element={
                <>
                  <RecommendedHeader videos={videos} />
                  <div className="p-6">
                    <VideoGrid videos={videos} />
                  </div>
                </>
              } />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tv-shows" element={<TVShows />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/continue-watching" element={<ContinueWatching />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watch/:id" element={<VideoPlayer video={videos[0]} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;