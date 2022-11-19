import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { Offer } from '../types/offer';

 type initialType = {
  activeCity: string;
  offers: Offer[];
 }

const initialState: initialType = {
  activeCity: '',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(setCity, (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    });
});

export { reducer };
