import { mockUsers, mockThreads, mockCategories, trendingHashtags, mockComments } from './mockData';

// Simulated delay to mimic network request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const apiClient = {
  login: async (email, password) => {
    await delay(800);
    const user = mockUsers.find(u => u.email === email);
    if (user || (email === 'test@test.com' && password === 'password')) {
      return { data: { token: 'mock-jwt-token', user: user || mockUsers[0] } };
    }
    throw new Error('Invalid credentials');
  },
  
  register: async (userData) => {
    await delay(1000);
    return { data: { token: 'mock-jwt-token', user: { id: Date.now(), ...userData, followers: 0, following: 0 } } };
  },

  getThreads: async (category = null) => {
    await delay(500);
    if (category) {
      return { data: mockThreads.filter(t => t.category === category) };
    }
    return { data: mockThreads };
  },

  getThreadById: async (id) => {
    await delay(500);
    const thread = mockThreads.find(t => t.id === parseInt(id));
    if (thread) {
      return { data: { ...thread, comments: mockComments[id] || [] } };
    }
    throw new Error('Thread not found');
  },

  getCategories: async () => {
    await delay(300);
    return { data: mockCategories };
  },

  getTrending: async () => {
    await delay(300);
    return { data: trendingHashtags };
  },

  likeThread: async (id) => {
    await delay(200);
    return { data: { success: true } };
  },

  addComment: async (threadId, text, user) => {
    await delay(600);
    const newComment = {
      id: Date.now(),
      text,
      author: user,
      timestamp: new Date().toISOString(),
      likes: 0
    };
    return { data: newComment };
  }
};
