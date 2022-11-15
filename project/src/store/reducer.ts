import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { Offer } from '../types/offer';

 type initialType = {
  city: string;
  offers: Offer[];
 }

const initialState: initialType = {
  city: '',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(setCity, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    });
});

export { reducer };
