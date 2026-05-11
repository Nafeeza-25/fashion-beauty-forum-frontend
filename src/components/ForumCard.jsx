import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Clock } from 'lucide-react';
import { formatDistanceToNow } from '../utils/dateUtils';

const ForumCard = ({ thread }) => {
  return (
    <Link to={`/thread/${thread.id}`} className="block">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <img src={thread.author.avatar} alt={thread.author.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-medium text-gray-900">{thread.author.name}</p>
              <div className="flex items-center text-xs text-gray-500 space-x-2">
                <Clock className="w-3 h-3" />
                <span>{thread.timestamp ? formatDistanceToNow(new Date(thread.timestamp)) : 'Just now'}</span>
              </div>
            </div>
          </div>
          <span className="bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {thread.category.replace('-', ' ')}
          </span>
        </div>

        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {thread.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{thread.excerpt}</p>

        <div className="flex items-center text-gray-500 space-x-6 text-sm font-medium">
          <div className="flex items-center space-x-1.5 hover:text-red-500 transition-colors">
            <Heart className="w-4 h-4" />
            <span>{thread.likes} Likes</span>
          </div>
          <div className="flex items-center space-x-1.5 hover:text-primary-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span>{thread.commentsCount || 0} Comments</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForumCard;
