import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import Home from './pages/Home';
import Login from './pages/Login';
import DiscussionBoard from './pages/DiscussionBoard';
import Profile from './pages/Profile';
import ThreadView from './pages/ThreadView';

function AppLayout({ children }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  if (isAuthPage) {
    return children;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />
      <div className="flex flex-1 max-w-[1600px] w-full mx-auto">
        <SidebarLeft />
        <main className="flex-1 w-full min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/board/:category" element={<DiscussionBoard />} />
          <Route path="/thread/:id" element={<ThreadView />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
