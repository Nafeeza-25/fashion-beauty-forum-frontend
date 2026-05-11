import React from 'react';
import { MessageCircle, Eye, MoreVertical, Plus, Bell } from 'lucide-react';

const DiscussionBoard = () => {
  const threads = [
    { id: 1, title: 'Top 10 Skincare Tips for Glowing Skin ✨', author: '@skincarequeen', time: '2 hours ago', avatar: 'https://i.pravatar.cc/150?img=1', tags: ['Routine', 'Tips'], comments: 24, views: 456 },
    { id: 2, title: 'What are the must-have products in your skincare routine?', author: '@glowgirl', time: '5 hours ago', avatar: 'https://i.pravatar.cc/150?img=5', tags: ['Products', 'Routine'], comments: 38, views: 612 },
    { id: 3, title: 'Niacinamide vs. Vitamin C – Which one worked for you?', author: '@skincarelove', time: '1 day ago', avatar: 'https://i.pravatar.cc/150?img=9', tags: ['Ingredients', 'Discussion'], comments: 31, views: 789 },
    { id: 4, title: 'How to build a beginner-friendly skincare routine?', author: '@beautybeginner', time: '1 day ago', avatar: 'https://i.pravatar.cc/150?img=12', tags: ['Routine', 'Beginner'], comments: 19, views: 345 },
    { id: 5, title: 'Best sunscreens for oily & acne-prone skin?', author: '@sunlover', time: '2 days ago', avatar: 'https://i.pravatar.cc/150?img=20', tags: ['Sunscreen', 'Oily Skin'], comments: 27, views: 532 },
    { id: 6, title: 'DIY face masks that actually work – Share your recipes!', author: '@naturallyyou', time: '3 days ago', avatar: 'https://i.pravatar.cc/150?img=32', tags: ['DIY', 'Home Remedies'], comments: 16, views: 298 },
  ];

  return (
    <div className="flex w-full">
      {/* Main Content */}
      <div className="flex-1 max-w-4xl p-8">
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
          <span>Home</span> <span>&gt;</span> <span>Forums</span> <span>&gt;</span> <span className="text-primary-500">Skincare</span>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center text-3xl text-primary-500">
              💧
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Skincare</h1>
              <p className="text-gray-500 text-sm mb-2">Discuss everything about skincare routines, products, tips and more.</p>
              <div className="flex space-x-4 text-xs text-gray-500">
                <span className="flex items-center">📝 276 Discussions</span>
                <span className="flex items-center">👥 2.4K Members</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
              <Bell className="w-4 h-4 mr-2" /> Follow
            </button>
            <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600">
              <Plus className="w-4 h-4 mr-2" /> New Discussion
            </button>
          </div>
        </div>

        <div className="border border-gray-100 rounded-xl bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-2 py-2 border-b border-gray-100 bg-gray-50/50">
            <div className="flex space-x-1">
              {['Latest', 'Trending', 'Unanswered', 'Most Replies'].map((tab, idx) => (
                <button key={tab} className={`px-4 py-2 text-sm font-medium rounded-lg ${idx === 0 ? 'text-primary-600 bg-white shadow-sm border border-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <button className="flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 mr-2">
              Filter <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>

          <div className="divide-y divide-gray-100">
            {threads.map(thread => (
              <div key={thread.id} className="p-4 hover:bg-gray-50 transition-colors flex items-center group cursor-pointer">
                <img src={thread.avatar} alt="author" className="w-10 h-10 rounded-full mr-4 object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 mb-1 truncate">{thread.title}</h3>
                  <div className="flex flex-wrap items-center text-xs text-gray-500 space-x-3 mb-2">
                    <span>By {thread.author}</span>
                    <span>•</span>
                    <span>{thread.time}</span>
                  </div>
                  <div className="flex space-x-2">
                    {thread.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded-md text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-6 text-gray-400 text-sm ml-4">
                  <div className="flex items-center space-x-1.5"><MessageCircle className="w-4 h-4" /><span>{thread.comments}</span></div>
                  <div className="flex items-center space-x-1.5"><Eye className="w-4 h-4" /><span>{thread.views}</span></div>
                  <button className="hover:text-gray-600"><MoreVertical className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm">
            <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">&lt; Previous</button>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5, '...', 14].map((p, i) => (
                <button key={i} className={`w-8 h-8 flex items-center justify-center rounded-md ${p === 1 ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                  {p}
                </button>
              ))}
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-600 hover:bg-gray-50">Next &gt;</button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-8 border-l border-gray-100 hidden xl:block space-y-6">
        
        {/* Trending Topics */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 flex items-center mb-4"><span className="text-orange-500 mr-2">🔥</span> Trending Topics</h3>
          <div className="space-y-4">
            <div><p className="text-sm font-semibold text-gray-800"># Glass Skin</p><p className="text-xs text-gray-500">1.2K posts</p></div>
            <div><p className="text-sm font-semibold text-gray-800"># Skincare Routine</p><p className="text-xs text-gray-500">986 posts</p></div>
            <div><p className="text-sm font-semibold text-gray-800"># Sunscreen</p><p className="text-xs text-gray-500">852 posts</p></div>
            <div><p className="text-sm font-semibold text-gray-800"># Acne Care</p><p className="text-xs text-gray-500">689 posts</p></div>
            <div><p className="text-sm font-semibold text-gray-800"># Anti Aging</p><p className="text-xs text-gray-500">534 posts</p></div>
          </div>
          <button className="text-primary-500 text-sm font-medium mt-4 hover:underline flex items-center">View all trending &rarr;</button>
        </div>

        {/* Popular Tags */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 flex items-center mb-4"><span className="text-primary-400 mr-2">💎</span> Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {['#Skincare', '#Routine', '#Tips', '#Products', '#Sunscreen', '#Acne', '#GlowSkin', '#Ingredients'].map(tag => (
              <span key={tag} className="px-3 py-1 border border-primary-100 text-primary-600 rounded-full text-xs hover:bg-primary-50 cursor-pointer">{tag}</span>
            ))}
          </div>
          <button className="text-primary-500 text-sm font-medium mt-4 hover:underline flex items-center">View all tags &rarr;</button>
        </div>

        {/* Online Users */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 flex items-center mb-4"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Online Users (24)</h3>
          <div className="flex -space-x-2 overflow-hidden mb-4">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=1" alt=""/>
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=2" alt=""/>
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=3" alt=""/>
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=4" alt=""/>
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?img=5" alt=""/>
            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">+18</div>
          </div>
          <button className="text-primary-500 text-sm font-medium hover:underline flex items-center">View all online users &rarr;</button>
        </div>

      </div>
    </div>
  );
};

export default DiscussionBoard;
