import { Offer } from '../types/offer';

export const offers: Offer[] = [{
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  previewImage: 'img/apartment-01.jpg',
  images: ['https://11.react.pages.academy/static/hotel/4.jpg',
    'https://11.react.pages.academy/static/hotel/20.jpg',
    'https://11.react.pages.academy/static/hotel/12.jpg',
    'https://11.react.pages.academy/static/hotel/7.jpg',
    'https://11.react.pages.academy/static/hotel/18.jpg'],
  isPremium: true,
  price: 250,
  title: 'Шиканые апарты с видом на успех',
  type: 'apartment',
  isFavorite: true,
  rating: 3.5,
  id: 1,
  location: {
    latitude: 52.37854,
    longitude:  4.894976,
    zoom: 16
  },
},
{
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  previewImage: 'img/room.jpg',
  images: ['https://11.react.pages.academy/static/hotel/13.jpg',
    'https://11.react.pages.academy/static/hotel/8.jpg',
    'https://11.react.pages.academy/static/hotel/2.jpg',
    'https://11.react.pages.academy/static/hotel/5.jpg',
    'https://11.react.pages.academy/static/hotel/17.jpg'],
  isPremium: false,
  price: 190,
  title: 'Ничего так квартирка',
  type: 'room',
  isFavorite: false,
  rating: 4.2,
  id: 2,
  location: {
    latitude: 52.36354,
    longitude: 4.911976,
    zoom: 16
  },
},
{
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  previewImage: 'img/studio-01.jpg',
  images: ['https://11.react.pages.academy/static/hotel/6.jpg',
    'https://11.react.pages.academy/static/hotel/15.jpg',
    'https://11.react.pages.academy/static/hotel/3.jpg',
    'https://11.react.pages.academy/static/hotel/11.jpg'],
  isPremium: true,
  price: 300,
  title: 'Классный домик, только патио не хватает',
  type: 'house',
  isFavorite: true,
  rating: 1.2,
  id: 3,
  location: {
    latitude: 52.37454,
    longitude: 4.881976,
    zoom: 16
  },
},
{
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  previewImage: 'img/apartment-02.jpg',
  images: ['https://11.react.pages.academy/static/hotel/1.jpg',
    'https://11.react.pages.academy/static/hotel/6.jpg',
    'https://11.react.pages.academy/static/hotel/4.jpg',
    'https://11.react.pages.academy/static/hotel/2.jpg',
    'https://11.react.pages.academy/static/hotel/7.jpg',
    'https://11.react.pages.academy/static/hotel/12.jpg'],
  isPremium: false,
  price: 30,
  title: 'Не отель, ахутель...',
  type: 'hotel',
  isFavorite: false,
  rating: 2.6,
  id: 4,
  location: {
    latitude: 52.38554,
    longitude: 4.902976,
    zoom: 16
  },
}];
