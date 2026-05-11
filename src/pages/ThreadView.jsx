import React from 'react';
import { Link } from 'react-router-dom';

const ThreadView = () => {
  return (
    <div className="p-8 max-w-4xl">
      <div className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:underline">Home</Link> <span>&gt;</span> <Link to="/board/skincare" className="hover:underline">Forums</Link> <span>&gt;</span> <span className="text-primary-500">Thread</span>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Thread content goes here</h1>
        <p className="text-gray-600 mb-8">This is a placeholder for the individual thread view.</p>
        <Link to="/board/skincare" className="text-primary-500 hover:underline">&larr; Back to Board</Link>
      </div>
    </div>
  );
};

export default ThreadView;
