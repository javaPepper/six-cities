import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setFavorite, setDataHotel, setRatingValue, setDataOffers, setAuthorizationStatus, setCity, setDataComments, setSortingValue, setDataNearbyOffers, setDataError, setDataOffersLoadingStatus, setFavoritesOffers } from './actions';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { AuthStatuses, SortingValues } from '../const';
import { offer } from '../mock/offer';
import { Favorites } from '../types/favorites';

 type initialType = {
  activeCity: string;
  offer: Offer;
  offers: Offer[];
  comments: Comment[];
  nearbyOffers: Offer[];
  sortingValue: string;
  isDataOffersLoading: boolean;
  authorizationStatus: AuthStatuses;
  error: boolean;
  ratingValue: number;
  favorites: Favorites[];
  isFavorite: boolean;
 }

const initialState: initialType = {
  activeCity: '',
  offers: [],
  offer: offer,
  comments: [],
  nearbyOffers: [],
  sortingValue: SortingValues.Popular,
  isDataOffersLoading: false,
  authorizationStatus: AuthStatuses.No_Auth,
  error: false,
  ratingValue: 0,
  favorites: [],
  isFavorite: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataComments, (state, action: PayloadAction<Comment[]>) => {
      state.comments = action.payload;
    })
    .addCase(setCity, (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    })
    .addCase(setSortingValue, (state, action: PayloadAction<string>) => {
      state.sortingValue = action.payload;
    })
    .addCase(setDataOffersLoadingStatus, (state, action: PayloadAction<boolean>) => {
      state.isDataOffersLoading = action.payload;
    })
    .addCase(setDataOffers, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action: PayloadAction<AuthStatuses>) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataNearbyOffers, (state, action: PayloadAction<Offer[]>) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setDataError, (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    })
    .addCase(setRatingValue, (state, action: PayloadAction<number>) => {
      state.ratingValue = action.payload;
    })
    .addCase(setDataHotel, (state, action: PayloadAction<Offer>) => {
      state.offer = action.payload;
    })
    .addCase(setFavoritesOffers, (state, action: PayloadAction<Favorites[]>) => {
      state.favorites = action.payload;
    })
    .addCase(setFavorite, (state, action:PayloadAction<boolean>) => {
      state.isFavorite = action.payload;}
    );
});

export { reducer };
