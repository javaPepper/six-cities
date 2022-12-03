import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setRatingValue, setDataOffers, setAuthorizationStatus, setCity, setDataComments, setSortingValue, setDataNearbyOffers, setDataError, setDataOffersLoadingStatus } from './actions';
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
  error: boolean;
  ratingValue: number;
 }

const initialState: initialType = {
  activeCity: '',
  offers: [],
  comments: [],
  nearbyOffers: [],
  sortingValue: SortingValues.Popular,
  isDataOffersLoading: false,
  authorizationStatus: AuthStatuses.No_Auth,
  error: false,
  ratingValue: 0,
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
    });
  // .addCase(getErrorValue, (state, action: PayloadAction<boolean>) => {
  //   state.error = action.payload;
  // });
});

export { reducer };
