import { RATING_VALUES, RatingValues, InputValues, TitleValues, SortingValues } from '../const';
import { Offer } from '../types/offer';

export const getRating = (value: number) => {
  switch(true) {
    case value >= RATING_VALUES.OneStar.min && value <= RATING_VALUES.OneStar.max:
      return RatingValues.Twenty;
    case value >= RATING_VALUES.TwoStars.min && value <= RATING_VALUES.TwoStars.max:
      return RatingValues.Fourty;
    case value >= RATING_VALUES.ThreeStars.min && value <= RATING_VALUES.ThreeStars.max:
      return RatingValues.Sixty;
    case value >= RATING_VALUES.FourStars.min && value <= RATING_VALUES.FourStars.max:
      return RatingValues.Eighty;
    case value >= RATING_VALUES.FiveStars.min && value <= RATING_VALUES.FiveStars.max:
      return RatingValues.Hundred;
    default:
      return 0;
  }
};

export const setRating = (value: number) => {
  switch(true) {
    case value === InputValues.Five:
      return TitleValues.Perfect;
    case value === InputValues.Four:
      return TitleValues.Good;
    case value === InputValues.Three:
      return TitleValues.Not_Bad;
    case value === InputValues.Two:
      return TitleValues.Badly;
    case value === InputValues.One:
      return TitleValues.Terribly;
    default:
      return 0;
  }
};

export const getSortingValues = (offers: Offer[], currentValue: string) => {
  let values: Offer[] = [];

  switch(true) {
    case currentValue === SortingValues.IncPrice:
      values = offers.sort((a, b) => a.price - b.price);
      return values;
    case currentValue === SortingValues.DecPrice:
      values = offers.sort((a, b) => b.price - a.price);
      return values;
    case currentValue === SortingValues.TopRated:
      values = offers.sort((a, b) => a.rating - b.rating);
      return values;
    case currentValue === SortingValues.Popular:
      return offers;
    default:
      return offers;
  }
};
