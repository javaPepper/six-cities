import { RATING_VALUES, RateValues, InputValues, TitleValues } from '../const';

export const getRating = (value: number) => {
  switch(true) {
    case value >= RATING_VALUES.OneStar.min && value <= RATING_VALUES.OneStar.max:
      return RateValues.Twenty;
    case value >= RATING_VALUES.TwoStars.min && value <= RATING_VALUES.TwoStars.max:
      return RateValues.Fourty;
    case value >= RATING_VALUES.ThreeStars.min && value <= RATING_VALUES.ThreeStars.max:
      return RateValues.Sixty;
    case value >= RATING_VALUES.FourStars.min && value <= RATING_VALUES.FourStars.max:
      return RateValues.Eighty;
    case value >= RATING_VALUES.FiveStars.min && value <= RATING_VALUES.FiveStars.max:
      return RateValues.Hundred;
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
