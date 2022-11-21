import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setCity, setOffers, setSortingValue } from './action';
import { Offer } from '../types/offer';
import { SortingValues } from '../const';

 type initialType = {
  activeCity: string;
  offers: Offer[];
  sortingValue: string;
 }

const initialState: initialType = {
  activeCity: '',
  offers: [],
  sortingValue: SortingValues.Popular
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action: PayloadAction<Offer[]>) => {
      state.offers = action.payload;
    })
    .addCase(setCity, (state, action: PayloadAction<string>) => {
      state.activeCity = action.payload;
    })
    .addCase(setSortingValue, (state, action: PayloadAction<string>) => {
      state.sortingValue = action.payload;
    });
});

export { reducer };
