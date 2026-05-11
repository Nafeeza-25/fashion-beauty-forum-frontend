import React from 'react';
import { MessageCircle, Heart, Eye, Bookmark, MapPin, Link as LinkIcon, Calendar, Mail, CheckCircle, Award, Edit3, Camera, User, Plus } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex w-full">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl p-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8 relative">
          <div className="h-48 bg-gray-200 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="px-8 pb-8">
            <div className="flex justify-between items-end relative -mt-16 mb-4">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop" alt="Profile" className="w-32 h-32 rounded-full border-4 border-white object-cover" />
                <button className="absolute bottom-2 right-2 bg-white p-1.5 rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary-500"><Camera className="w-4 h-4" /></button>
              </div>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Edit Profile</button>
            </div>
            
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Emma Rose</h1>
              <p className="text-gray-500 mb-3">@emmarose <span className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full bg-primary-50 text-primary-600 text-xs font-medium"><CheckCircle className="w-3 h-3 mr-1" /> Active Member</span> <span className="text-gray-400 text-sm ml-2">Joined April 2024</span></p>
              <p className="text-gray-700 text-sm mb-4">Skincare lover • Beauty enthusiast • Sharing tips that actually work ✨</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> New York, USA</span>
                <span className="flex items-center text-primary-500 hover:underline cursor-pointer"><LinkIcon className="w-4 h-4 mr-1.5" /> instagram.com/emmarose</span>
              </div>
            </div>

            <div className="grid grid-cols-5 divide-x divide-gray-100 border-t border-gray-100 pt-6">
              <div className="text-center px-4"><div className="flex items-center justify-center mb-1 text-primary-400"><MessageCircle className="w-5 h-5 mr-1" /></div><span className="text-xl font-bold text-gray-900 block">236</span><span className="text-xs text-gray-500 uppercase tracking-wide">Discussions</span></div>
              <div className="text-center px-4"><div className="flex items-center justify-center mb-1 text-purple-400"><MessageCircle className="w-5 h-5 mr-1" /></div><span className="text-xl font-bold text-gray-900 block">1.2K</span><span className="text-xs text-gray-500 uppercase tracking-wide">Replies</span></div>
              <div className="text-center px-4"><div className="flex items-center justify-center mb-1 text-red-400"><Heart className="w-5 h-5 mr-1" /></div><span className="text-xl font-bold text-gray-900 block">568</span><span className="text-xs text-gray-500 uppercase tracking-wide">Likes Received</span></div>
              <div className="text-center px-4"><div className="flex items-center justify-center mb-1 text-yellow-500"><Bookmark className="w-5 h-5 mr-1" /></div><span className="text-xl font-bold text-gray-900 block">89</span><span className="text-xs text-gray-500 uppercase tracking-wide">Bookmarks</span></div>
              <div className="text-center px-4"><div className="flex items-center justify-center mb-1 text-green-500"><Eye className="w-5 h-5 mr-1" /></div><span className="text-xl font-bold text-gray-900 block">2.4K</span><span className="text-xs text-gray-500 uppercase tracking-wide">Profile Views</span></div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center px-6 py-3 border-b border-gray-100 overflow-x-auto">
            {['Activity', 'Discussions', 'Replies', 'Likes', 'Bookmarks'].map((tab, idx) => (
              <button key={tab} className={`whitespace-nowrap px-4 py-2 text-sm font-medium border-b-2 ${idx === 0 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab}
              </button>
            ))}
            <div className="ml-auto flex items-center space-x-4 text-sm font-medium">
              <span className="text-gray-600">Followers <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 ml-1">1.2K</span></span>
              <span className="text-gray-600">Following <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 ml-1">356</span></span>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Post 1 */}
            <div className="flex space-x-4 border-b border-gray-50 pb-6">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=150&h=150&fit=crop" alt="thumb" className="w-24 h-20 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 hover:text-primary-600 cursor-pointer">Top 10 Skincare Tips for Glowing Skin ✨</h3>
                <div className="flex space-x-2 mb-2">
                  <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded text-xs font-medium">Skincare</span>
                  <span className="px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs font-medium">Tips</span>
                </div>
                <p className="text-xs text-gray-500">Posted 2 hours ago</p>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm h-fit">
                <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1" /> 24</span>
                <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> 456</span>
                <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> 78</span>
              </div>
            </div>

             {/* Post 2 */}
             <div className="flex space-x-4 border-b border-gray-50 pb-6">
              <img src="https://images.unsplash.com/photo-1512496115851-a1c8e04ce86e?w=150&h=150&fit=crop" alt="thumb" className="w-24 h-20 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 hover:text-primary-600 cursor-pointer">My Everyday Makeup Routine for Work</h3>
                <div className="flex space-x-2 mb-2">
                  <span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-xs font-medium">Makeup</span>
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-xs font-medium">Routine</span>
                </div>
                <p className="text-xs text-gray-500">Posted 5 days ago</p>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm h-fit">
                <span className="flex items-center"><MessageCircle className="w-4 h-4 mr-1" /> 38</span>
                <span className="flex items-center"><Eye className="w-4 h-4 mr-1" /> 612</span>
                <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> 92</span>
              </div>
            </div>
            
            <button className="w-full py-3 text-center text-sm font-medium text-primary-500 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
              View all my discussions &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-8 border-l border-gray-100 hidden xl:block space-y-6">
        
        {/* About Me */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 flex items-center mb-3"><User className="w-4 h-4 mr-2 text-gray-500" /> About Me</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            I love trying new skincare products and sharing honest reviews. Let's glow together! Always here to help ❤️
          </p>
          <div className="space-y-3">
            <div className="flex items-start"><Mail className="w-4 h-4 text-gray-400 mt-0.5 mr-3" /><div><p className="text-xs text-gray-900 font-medium">Email</p><p className="text-xs text-gray-500">emmarose@gmail.com</p></div></div>
            <div className="flex items-start"><MapPin className="w-4 h-4 text-gray-400 mt-0.5 mr-3" /><div><p className="text-xs text-gray-900 font-medium">Location</p><p className="text-xs text-gray-500">New York, USA</p></div></div>
            <div className="flex items-start"><LinkIcon className="w-4 h-4 text-gray-400 mt-0.5 mr-3" /><div><p className="text-xs text-gray-900 font-medium">Website</p><p className="text-xs text-primary-500">instagram.com/emmarose</p></div></div>
            <div className="flex items-start"><Calendar className="w-4 h-4 text-gray-400 mt-0.5 mr-3" /><div><p className="text-xs text-gray-900 font-medium">Joined</p><p className="text-xs text-gray-500">April 18, 2024</p></div></div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 flex items-center"><Award className="w-4 h-4 mr-2 text-yellow-500" /> Badges</h3>
            <span className="text-xs text-primary-500 hover:underline cursor-pointer">View all</span>
          </div>
          <div className="flex justify-between text-center">
            <div className="flex flex-col items-center"><div className="w-10 h-10 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mb-1 text-lg">⭐</div><span className="text-[10px] text-gray-600 font-medium">Top Contributor</span></div>
            <div className="flex flex-col items-center"><div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-1 text-lg">👍</div><span className="text-[10px] text-gray-600 font-medium">Helpful Member</span></div>
            <div className="flex flex-col items-center"><div className="w-10 h-10 bg-purple-100 text-purple-500 rounded-xl flex items-center justify-center mb-1 text-lg">💅</div><span className="text-[10px] text-gray-600 font-medium">Skincare Expert</span></div>
            <div className="flex flex-col items-center"><div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-1 text-lg">👗</div><span className="text-[10px] text-gray-600 font-medium">Trend Setter</span></div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-900 flex items-center"><Edit3 className="w-4 h-4 mr-2 text-gray-500" /> Recent Activity</h3>
            <span className="text-xs text-primary-500 hover:underline cursor-pointer">View all</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="text-red-500 mt-0.5 mr-3"><Heart className="w-4 h-4 fill-current" /></div>
              <div><p className="text-sm text-gray-700">Liked a post in <span className="text-primary-600 hover:underline cursor-pointer">Skincare Routine</span></p><p className="text-xs text-gray-400">2 minutes ago</p></div>
            </div>
            <div className="flex items-start">
              <div className="text-blue-500 mt-0.5 mr-3"><MessageCircle className="w-4 h-4" /></div>
              <div><p className="text-sm text-gray-700">Replied to a discussion</p><p className="text-xs text-gray-400">1 hour ago</p></div>
            </div>
            <div className="flex items-start">
              <div className="text-green-500 mt-0.5 mr-3"><Plus className="w-4 h-4 bg-green-100 rounded-full" /></div>
              <div><p className="text-sm text-gray-700">Created a new discussion</p><p className="text-xs text-gray-400">5 hours ago</p></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
