import { City } from './city';

export type Offer = {
  bedrooms: number;
  city: City;
  id: number;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
  type: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
};

