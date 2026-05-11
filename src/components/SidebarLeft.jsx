import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Bookmark, FileText, Bell, Mail } from 'lucide-react';

const SidebarLeft = () => {
  const mainLinks = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Explore', icon: Compass, path: '/explore' },
    { name: 'Bookmarks', icon: Bookmark, path: '/bookmarks' },
    { name: 'My Posts', icon: FileText, path: '/my-posts' },
    { name: 'Notifications', icon: Bell, path: '/notifications', badge: 3 },
    { name: 'Messages', icon: Mail, path: '/messages', badge: 2 },
  ];

  const categories = [
    { name: 'Skincare', path: '/board/skincare', count: 276, active: true, icon: '💧' },
    { name: 'Makeup', path: '/board/makeup', count: 318, icon: '💄' },
    { name: 'Hair Care', path: '/board/haircare', count: 142, icon: '🧴' },
    { name: 'Fashion', path: '/board/fashion', count: 245, icon: '👗' },
    { name: 'Outfits', path: '/board/outfits', count: 134, icon: '👚' },
    { name: 'Lifestyle', path: '/board/lifestyle', count: 188, icon: '🤍' },
    { name: 'Accessories', path: '/board/accessories', count: 96, icon: '👜' },
    { name: 'Brands', path: '/board/brands', count: 87, icon: '🏷️' },
  ];

  return (
    <div className="w-64 flex-shrink-0 border-r border-gray-100 bg-white h-screen sticky top-16 overflow-y-auto hidden lg:block pb-20">
      <div className="px-6 py-6">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Main Menu</h3>
        <ul className="space-y-1">
          {mainLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path}
                className={({isActive}) => `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <div className="flex items-center">
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.name}
                </div>
                {link.badge && (
                  <span className="bg-primary-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 py-2">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
        <ul className="space-y-1">
          {categories.map((cat) => (
            <li key={cat.name}>
              <NavLink 
                to={cat.path}
                className={({isActive}) => `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive || cat.active ? 'bg-primary-50 text-primary-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-lg">{cat.icon}</span>
                  {cat.name}
                </div>
                <span className="text-gray-400 text-xs">{cat.count}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="mt-6 text-primary-500 font-medium text-sm hover:underline px-3">
          View All Categories
        </button>
      </div>
    </div>
  );
};

export default SidebarLeft;
