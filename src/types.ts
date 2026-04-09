export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'artisan' | 'agent' | 'admin';
  avatar?: string;
  isVerified: boolean;
  ninVerified: boolean;
  walletBalance: number;
  createdAt: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  pricePeriod: 'year' | 'month' | 'sqm';
  type: 'residential' | 'commercial' | 'land' | 'shortlet';
  category: 'apartment' | 'house' | 'shop' | 'office' | 'land';
  images: string[];
  features: string[];
  ownerId: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Artisan {
  id: string;
  userId: string;
  role: string;
  bio: string;
  location: string;
  rating: number;
  reviewCount: number;
  jobCount: number;
  portfolio: string[];
  skills: string[];
  isVerified: boolean;
  ninVerified: boolean;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'quoted' | 'funded' | 'in-progress' | 'completed' | 'cancelled';
  clientId: string;
  artisanId?: string;
  budget?: number;
  quote?: number;
  escrowStatus: 'none' | 'held' | 'released' | 'disputed';
  createdAt: string;
}
