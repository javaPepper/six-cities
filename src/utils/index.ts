import { InputValues, TitleValues, SortingValues } from '../const';
import { Offer } from '../types/offer';

const MAX = 5;

export const getRating = (value: number) => (Math.round(value) / MAX) * 100;

export const setRating = (value: number) => {
  switch(true) {
    case value === InputValues.Five as number:
      return TitleValues.Perfect;
    case value === InputValues.Four as number:
      return TitleValues.Good;
    case value === InputValues.Three as number:
      return TitleValues.Not_Bad;
    case value === InputValues.Two as number:
      return TitleValues.Badly;
    case value === InputValues.One as number:
      return TitleValues.Terribly;
    default:
      return 0;
  }
};

export const getSortingValues = (offers: Offer[], currentValue: string) => {
  let values: Offer[] = [];

  switch(true) {
    case currentValue === SortingValues.IncPrice as string:
      values = offers.sort((a, b) => a.price - b.price);
      return values;
    case currentValue === SortingValues.DecPrice as string:
      values = offers.sort((a, b) => b.price - a.price);
      return values;
    case currentValue === SortingValues.TopRated as string:
      values = offers.sort((a, b) => b.rating - a.rating);
      return values;
    case currentValue === SortingValues.Popular as string:
      return offers;
    default:
      return offers;
  }
};
