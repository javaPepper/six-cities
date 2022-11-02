export type Offer = {
city: {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    name: string;
    };
id: number;
images: string[];
isFavorite: boolean;
isPremium: boolean;
previewImage: string;
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

