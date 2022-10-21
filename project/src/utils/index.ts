import { ratingValues, RateValues } from '../const';

export const getRating = (value: number) => {
  switch(true) {
    case value >= ratingValues.OneStar.min && value <= ratingValues.OneStar.max:
      return RateValues.Twenty;
    case value >= ratingValues.TwoStars.min && value <= ratingValues.TwoStars.max:
      return RateValues.Fourty;
    case value >= ratingValues.ThreeStars.min && value <= ratingValues.ThreeStars.max:
      return RateValues.Sixty;
    case value >= ratingValues.FourStars.min && value <= ratingValues.FourStars.max:
      return RateValues.Eighty;
    case value >= ratingValues.FiveStars.min && value <= ratingValues.FiveStars.max:
      return RateValues.Hundred;
    default:
      return 0;
  }
};
