import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitoring, and smartphone notifications. Water-resistant up to 50m.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Electronics',
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    description: 'Sleek and functional backpack with laptop compartment, water-resistant material, and ergonomic design.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Accessories',
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable t-shirt made from 100% organic cotton. Available in multiple colors.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    category: 'Clothing',
    inStock: true,
    rating: 4.5,
    reviews: 312
  },
  {
    id: '5',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
    category: 'Accessories',
    inStock: true,
    rating: 4.9,
    reviews: 428
  },
  {
    id: '6',
    name: 'Wireless Keyboard & Mouse',
    description: 'Ergonomic wireless keyboard and mouse combo with long battery life and silent keys.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    category: 'Electronics',
    inStock: true,
    rating: 4.4,
    reviews: 267
  },
  {
    id: '7',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper for maximum comfort.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    category: 'Footwear',
    inStock: true,
    rating: 4.7,
    reviews: 543
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    description: 'Extra-thick yoga mat with non-slip surface and carrying strap. Perfect for yoga, pilates, and stretching.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&q=80',
    category: 'Fitness',
    inStock: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: '9',
    name: 'Portable Bluetooth Speaker',
    description: '360-degree sound, waterproof design, and 12-hour battery life. Perfect for outdoor adventures.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80',
    category: 'Electronics',
    inStock: false,
    rating: 4.8,
    reviews: 376
  },
  {
    id: '10',
    name: 'Leather Wallet',
    description: 'Handcrafted genuine leather wallet with RFID protection and multiple card slots.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80',
    category: 'Accessories',
    inStock: true,
    rating: 4.5,
    reviews: 221
  },
  {
    id: '11',
    name: 'Desk Lamp LED',
    description: 'Adjustable LED desk lamp with touch control, multiple brightness levels, and USB charging port.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'Home',
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: '12',
    name: 'Coffee Maker Deluxe',
    description: 'Programmable coffee maker with thermal carafe, brew strength control, and auto shut-off.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80',
    category: 'Home',
    inStock: true,
    rating: 4.7,
    reviews: 289
  }
];

export const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Clothing',
  'Footwear',
  'Fitness',
  'Home'
];
