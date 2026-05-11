export const mockUsers = [
  { id: 1, name: 'Z. Nafeeza', email: 'nafeeza@example.com', avatar: 'https://i.pravatar.cc/150?u=nafeeza', bio: 'Fashion enthusiast & student.', followers: 120, following: 45, joinDate: '2025-12-01' },
];

export const mockCategories = [
  { id: 'skincare', name: 'Skincare', icon: 'Sparkles' },
  { id: 'makeup', name: 'Makeup', icon: 'Brush' },
  { id: 'fashion-trends', name: 'Fashion Trends', icon: 'Shirt' },
  { id: 'haircare', name: 'Haircare', icon: 'Scissors' },
  { id: 'product-reviews', name: 'Product Reviews', icon: 'Star' },
  { id: 'ootd', name: 'OOTD', icon: 'Camera' },
];

export const mockThreads = [
  {
    id: 1,
    title: 'What are the must-have skincare products for winter?',
    excerpt: 'My skin gets incredibly dry during the winter. What are your holy grail products to keep it hydrated?',
    content: 'My skin gets incredibly dry during the winter. I have combination skin, but the cold weather just strips all the moisture away. What are your holy grail products to keep it hydrated? Im currently using a basic moisturizer but it doesn’t seem to be enough.',
    author: mockUsers[0],
    category: 'skincare',
    likes: 42,
    commentsCount: 5,
    timestamp: '2026-01-02T10:00:00Z',
    hashtags: ['winter', 'skincare', 'hydration']
  },
  {
    id: 2,
    title: 'Spring 2026 Fashion Trends Prediction',
    excerpt: 'Let\'s discuss what styles will dominate this upcoming spring season.',
    content: 'I\'m seeing a lot of pastel colors and oversized blazers making a comeback. What do you all think will be the biggest trend for Spring 2026?',
    author: { id: 2, name: 'StyleGuru', avatar: 'https://i.pravatar.cc/150?u=styleguru' },
    category: 'fashion-trends',
    likes: 89,
    commentsCount: 12,
    timestamp: '2026-01-04T14:30:00Z',
    hashtags: ['spring2026', 'trends', 'ootd']
  }
];

export const mockComments = {
  1: [
    { id: 101, text: 'I highly recommend a hyaluronic acid serum before your moisturizer!', author: { id: 3, name: 'SkinDoc', avatar: 'https://i.pravatar.cc/150?u=skindoc' }, timestamp: '2026-01-02T11:00:00Z', likes: 10 },
    { id: 102, text: 'Don\'t forget a good occlusive layer at night, like Vaseline or Cerave Healing Ointment.', author: { id: 4, name: 'GlowUp', avatar: 'https://i.pravatar.cc/150?u=glowup' }, timestamp: '2026-01-02T12:30:00Z', likes: 25 }
  ]
};

export const trendingHashtags = ['#skincare', '#spring2026', '#OOTD', '#vintage', '#kbeauty'];
