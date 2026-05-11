import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-4 bg-background">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-600 mb-2">Fashion Forum</h1>
        <p className="text-gray-600">Connect. Share. Inspire.</p>
      </div>

      <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 flex max-w-4xl w-full overflow-hidden">
        {/* Image Side */}
        <div className="w-5/12 bg-primary-50 p-12 flex flex-col justify-center relative hidden md:flex">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{isLogin ? 'Welcome Back!' : 'Join Our Community'}</h2>
          <p className="text-gray-700 leading-relaxed z-10">
            {isLogin 
              ? 'Log in to continue your fashion & beauty journey.'
              : 'Create an account and be part of a community that celebrates fashion, beauty and you.'}
          </p>
          <div className="mt-8 relative h-64 w-full flex-1">
             {/* Using Unsplash placeholder that looks similar to beauty/fashion theme */}
             <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop" alt="Beauty items" className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg mix-blend-multiply" />
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-7/12 p-10 lg:p-16 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-primary-500 mb-2">{isLogin ? 'Log In' : 'Sign Up'}</h2>
          <p className="text-gray-500 text-sm mb-8">{isLogin ? 'Welcome back! Please enter your details.' : 'Create your account to get started.'}</p>

          <form className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">✉️</span>
                <input type="email" placeholder="Enter your email" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm" />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">👤</span>
                  <input type="text" placeholder="Choose a username" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
                <input type="password" placeholder={isLogin ? "Enter your password" : "Create a password"} className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm" />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">👁️</span>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-gray-400">🔒</span>
                  <input type="password" placeholder="Confirm your password" className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm" />
                  <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">👁️</span>
                </div>
              </div>
            )}

            {isLogin ? (
              <div className="flex items-center justify-between text-sm mt-4">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500 border-gray-300 mr-2" defaultChecked />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <span className="text-primary-500 hover:underline cursor-pointer">Forgot Password?</span>
              </div>
            ) : (
              <div className="text-sm mt-4">
                <label className="flex items-start">
                  <input type="checkbox" className="rounded text-primary-500 focus:ring-primary-500 border-gray-300 mt-1 mr-2" defaultChecked />
                  <span className="text-gray-600 text-xs">I agree to the <span className="text-primary-500 cursor-pointer">Terms of Service</span> and <span className="text-primary-500 cursor-pointer">Privacy Policy</span></span>
                </label>
              </div>
            )}

            <button type="button" className="w-full bg-primary-500 text-white font-medium py-3 rounded-lg hover:bg-primary-600 transition-colors mt-6 shadow-md shadow-primary-500/20">
              {isLogin ? 'Log In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-xs text-gray-400 uppercase tracking-wider">{isLogin ? 'or continue with' : 'or sign up with'}</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <span className="mr-2">G</span> {isLogin ? 'Continue with Google' : 'Google'}
            </button>
            <button className="flex-1 flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <span className="mr-2 text-blue-600">f</span> {isLogin ? 'Continue with Facebook' : 'Facebook'}
            </button>
            {!isLogin && (
              <button className="flex-1 flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                <span className="mr-2 text-gray-900"></span> Apple
              </button>
            )}
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-primary-500 font-medium hover:underline">
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center space-x-8 text-xs text-gray-500">
        <span className="flex items-center"><span className="text-red-400 mr-1.5">🛡️</span> Secure & Private</span>
        <span className="flex items-center"><span className="text-purple-400 mr-1.5">👥</span> Trusted Community</span>
        <span className="flex items-center"><span className="text-primary-400 mr-1.5">❤️</span> Share & Connect</span>
        <span className="flex items-center"><span className="text-yellow-400 mr-1.5">⭐</span> Inspire & Grow</span>
      </div>
      <p className="mt-6 text-xs text-gray-400">© 2026 Fashion Forum. All rights reserved.</p>
    </div>
  );
};

export default Login;
