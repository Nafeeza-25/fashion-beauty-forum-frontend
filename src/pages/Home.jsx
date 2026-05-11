import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Eye } from 'lucide-react';

const Home = () => {
  const categories = [
    { name: 'Fashion', count: 245, icon: '👗' },
    { name: 'Makeup', count: 318, icon: '💄' },
    { name: 'Skincare', count: 276, icon: '🌸' },
    { name: 'Hair Care', count: 142, icon: '👩🏻‍🦰' },
    { name: 'Accessories', count: 96, icon: '👜' },
    { name: 'Lifestyle', count: 188, icon: '❤️' },
    { name: 'Outfits', count: 134, icon: '📷' },
    { name: 'Brands', count: 87, icon: '🏷️' },
  ];

  const threads = [
    { id: 1, title: 'Top 10 Skincare Tips for Glowing Skin ✨', author: '@skincarequeen', category: 'Skincare', time: '2 hours ago', excerpt: "Let's discuss the best daily skincare routine for healthy and glowing skin...", comments: 24, views: 456 },
    { id: 2, title: 'What are the must-have products in your makeup bag?', author: '@makeupaddict', category: 'Makeup', time: '5 hours ago', excerpt: "Share your essential makeup products that you can't live without...", comments: 38, views: 612 },
    { id: 3, title: 'Latest Fashion Trends to Watch Out in 2025', author: '@trendsetter', category: 'Fashion', time: '1 day ago', excerpt: "From street style to runway, let's talk about the biggest trends...", comments: 31, views: 789 },
    { id: 4, title: 'Best Shampoos for Hair Growth – Your Recommendations?', author: '@haircarepro', category: 'Hair Care', time: '1 day ago', excerpt: "Looking for shampoos that really work. Drop your suggestions!", comments: 19, views: 345 },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <div className="p-8 pb-20 flex-1 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <div className="bg-primary-50 rounded-[2rem] p-10 flex items-center justify-between overflow-hidden relative mb-12 border border-primary-100">
          <div className="relative z-10 max-w-lg">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome to <br/>
              <span className="text-primary-500">Fashion & Beauty Forum</span>
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Connect with fashion lovers, share beauty tips, join discussions and explore the latest trends.
            </p>
            <div className="flex space-x-4">
              <Link to="/login" className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20">
                Join the Community
              </Link>
              <Link to="/explore" className="bg-white text-primary-500 border border-primary-200 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Explore Forums
              </Link>
            </div>
          </div>
          
          <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-l from-primary-100/50 to-transparent"></div>
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop" className="absolute right-0 h-full object-cover mix-blend-multiply opacity-80" alt="Makeup brushes" />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              <span className="w-2 h-2 rounded-full bg-primary-200"></span>
              <span className="w-2 h-2 rounded-full bg-primary-200"></span>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Explore Categories</h2>
            <Link to="/categories" className="text-sm font-medium text-primary-500 hover:underline">View all categories &rarr;</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map(cat => (
              <Link key={cat.name} to={`/board/${cat.name.toLowerCase().replace(' ', '')}`} className="bg-white border border-gray-100 rounded-2xl p-4 text-center hover:shadow-md transition-shadow hover:border-primary-100 group">
                <div className="w-12 h-12 mx-auto bg-primary-50 rounded-full flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary-600">{cat.name}</h3>
                <p className="text-xs text-gray-500 mt-1">({cat.count})</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Discussions */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Trending Discussions</h2>
              <Link to="/trending" className="text-sm font-medium text-primary-500 hover:underline">View all &rarr;</Link>
            </div>
            
            <div className="space-y-4">
              {threads.map(thread => (
                <div key={thread.id} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow flex gap-5">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 relative overflow-hidden border border-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-3xl opacity-50">📷</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1 hover:text-primary-600 cursor-pointer">{thread.title}</h3>
                    <div className="text-xs text-gray-500 mb-2 flex items-center space-x-2">
                      <span>By {thread.author}</span>
                      <span>•</span>
                      <span className="text-gray-700">{thread.category}</span>
                      <span>•</span>
                      <span>{thread.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-1">{thread.excerpt}</p>
                  </div>
                  <div className="flex flex-col items-end justify-center space-y-2 text-sm text-gray-500 border-l border-gray-100 pl-4 w-24">
                    <div className="flex items-center"><MessageCircle className="w-4 h-4 mr-1.5" /> {thread.comments}</div>
                    <div className="flex items-center"><Eye className="w-4 h-4 mr-1.5" /> {thread.views}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 space-y-8">
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4">Popular Tags</h2>
              <div className="flex flex-wrap gap-2">
                {['#Skincare', '#Makeup', '#Fashion', '#HairCare', '#Outfits', '#BeautyTips', '#Lifestyle', '#Reviews'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 border border-primary-100 text-primary-600 rounded-md text-xs hover:bg-primary-50 cursor-pointer">{tag}</span>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4">Top Contributors</h2>
              <div className="space-y-5">
                {[
                  { name: 'SkincareQueen', posts: '1.2k posts', id: 1 },
                  { name: 'TrendSetter', posts: '980 posts', id: 2 },
                  { name: 'BeautyLover22', posts: '875 posts', id: 3 },
                ].map(user => (
                  <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center">
                         <span className="text-gray-400 opacity-50">👤</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{user.name}</h4>
                        <p className="text-xs text-gray-500">{user.posts}</p>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-primary-500 border border-primary-200 px-3 py-1 rounded hover:bg-primary-50">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full text-right text-xs font-medium text-primary-500 mt-4 hover:underline">
                View all contributors &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-primary-500 text-lg mb-4">Fashion Forum</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed pr-8">
              A community for fashion lovers and beauty enthusiasts to connect, share and grow together.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center cursor-pointer">📷</div>
              <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center cursor-pointer">🐦</div>
              <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center cursor-pointer">👍</div>
              <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center cursor-pointer">📌</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-primary-500 cursor-pointer">&gt; Home</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Explore</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Create Post</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Forums</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; About Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-primary-500 cursor-pointer">&gt; Guidelines</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Help Center</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Privacy Policy</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Terms of Service</li>
              <li className="hover:text-primary-500 cursor-pointer">&gt; Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to get beauty & fashion updates in your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-200 rounded-l-md text-sm focus:outline-none focus:border-primary-300" />
              <button className="bg-primary-500 text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-primary-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-100 text-xs text-gray-400">
          © 2026 Fashion Forum. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
