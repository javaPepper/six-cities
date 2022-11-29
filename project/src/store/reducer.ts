import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setDataOffers, setAuthorizationStatus, setCity, setDataOffersLoadingStatus, setComments, setSortingValue, setNearbyOffers } from './actions';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { AuthStatuses, SortingValues } from '../const';

 type initialType = {
  activeCity: string;
  offers: Offer[];
  comments: Comment[];
  nearbyOffers: Offer[];
  sortingValue: string;
  isDataOffersLoading: boolean;
  authorizationStatus: AuthStatuses;
 }

const initialState: initialType = {
  activeCity: '',
  offers: [],
  comments: [],
  nearbyOffers: [],
  sortingValue: SortingValues.Popular,
  isDataOffersLoading: false,
  authorizationStatus: AuthStatuses.Uknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action: PayloadAction<Comment[]>) => {
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
    .addCase(setNearbyOffers, (state, action: PayloadAction<Offer[]>) => {
      state.nearbyOffers = action.payload;
    });
});

export { reducer };
