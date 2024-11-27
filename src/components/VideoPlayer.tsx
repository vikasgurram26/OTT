import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share2, BookmarkPlus } from 'lucide-react';
import { comments } from '../data/sampleData';

export const VideoPlayer = ({ video }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        {/* Video player placeholder */}
        <div className="w-full h-full flex items-center justify-center text-white">
          Video Player
        </div>
      </div>
      
      <div className="mt-4">
        <h1 className="text-2xl font-bold text-white">{video.title}</h1>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <img
              src={video.channelAvatar}
              alt={video.channelName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-white font-medium">{video.channelName}</h3>
              <p className="text-gray-400 text-sm">
                {video.views.toLocaleString()} views • {video.uploadDate}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full
                ${liked ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              <ThumbsUp size={20} />
              <span>23K</span>
            </button>
            <button
              onClick={() => setDisliked(!disliked)}
              className={`flex items-center space-x-1 px-4 py-2 rounded-full
                ${disliked ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}
            >
              <ThumbsDown size={20} />
            </button>
            <button className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gray-800 text-gray-300">
              <Share2 size={20} />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-1 px-4 py-2 rounded-full bg-gray-800 text-gray-300">
              <BookmarkPlus size={20} />
              <span>Save</span>
            </button>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-white text-lg font-medium mb-4">Comments</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">{comment.user}</span>
                    <span className="text-gray-400 text-sm">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-300 mt-1">{comment.content}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <ThumbsUp size={16} className="text-gray-400" />
                    <span className="text-gray-400 text-sm">{comment.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};