import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiClient } from '../api/apiClient';
import { TrendingUp, Hash } from 'lucide-react';

const Sidebar = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await apiClient.getTrending();
        setTrending(res.data);
      } catch (err) {
        console.error("Failed to fetch trending tags");
      }
    };
    fetchTrending();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="text-primary-600 w-5 h-5" />
        <h3 className="font-serif font-bold text-lg">Trending Topics</h3>
      </div>
      <div className="flex flex-col space-y-3">
        {trending.map((tag, idx) => (
          <Link key={idx} to={`/board?search=${encodeURIComponent(tag)}`} className="flex items-center group">
            <div className="bg-primary-50 rounded-full p-2 mr-3 group-hover:bg-primary-100 transition-colors">
              <Hash className="w-4 h-4 text-primary-600" />
            </div>
            <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors">{tag}</span>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-serif font-bold text-lg mb-4">Active Contributors</h3>
        <div className="flex -space-x-2 overflow-hidden">
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=1" alt=""/>
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=2" alt=""/>
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=3" alt=""/>
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=4" alt=""/>
        </div>
        <p className="text-sm text-gray-500 mt-3">Join 5,000+ members in the discussion.</p>
      </div>
    </div>
  );
};

export default Sidebar;
