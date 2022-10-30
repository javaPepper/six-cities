import { setRating } from '../../utils';
import { useState } from 'react';

type RatingComponentProps = {
  rateValue: number;
}
function RatingComponent({rateValue}: RatingComponentProps) {
  const [ ratingValue, setRatingValue] = useState(0);

  return(
    <div className="reviews__rating-form form__rating">
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={5} id={`${setRating(rateValue)}-stars`} type="radio"
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          setRatingValue(+value);
        }}
      />
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect"><svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg></label>
    </div>
  );
}

export default RatingComponent;
