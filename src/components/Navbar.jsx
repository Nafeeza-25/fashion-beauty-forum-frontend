import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, Compass, Plus, User, Shield, MessageSquare, Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 h-16 flex items-center px-6">
      <div className="flex items-center w-64 flex-shrink-0">
        <Link to="/" className="text-primary-500 font-bold text-xl tracking-tight">Fashion Forum</Link>
      </div>

      <div className="flex-1 max-w-2xl mx-8 relative hidden md:block">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search discussions, topics, or users..." 
          className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 focus:bg-white transition-colors"
        />
      </div>

      <div className="flex items-center justify-end flex-1 space-x-6 text-sm font-medium text-gray-700">
        <Link to="/" className="flex items-center hover:text-primary-500 transition-colors">
          <Home className="w-4 h-4 mr-1.5" /> Home
        </Link>
        <Link to="/explore" className="flex items-center hover:text-primary-500 transition-colors">
          <Compass className="w-4 h-4 mr-1.5" /> Explore
        </Link>
        <button className="bg-primary-500 text-white px-4 py-1.5 rounded-md flex items-center hover:bg-primary-600 transition-colors">
          <Plus className="w-4 h-4 mr-1" /> Create
        </button>
        <Link to="/profile" className="flex items-center hover:text-primary-500 transition-colors">
          <User className="w-4 h-4 mr-1.5" /> Profile
        </Link>
        <Link to="/admin" className="flex items-center hover:text-primary-500 transition-colors">
          <Shield className="w-4 h-4 mr-1.5" /> Admin
        </Link>
        
        <div className="flex items-center pl-2 space-x-4 border-l border-gray-200">
          <button className="relative text-gray-500 hover:text-gray-700">
            <MessageSquare className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
          </button>
          <button className="relative text-gray-500 hover:text-gray-700">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
          </button>
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" className="w-8 h-8 rounded-full border border-gray-200 cursor-pointer object-cover" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
