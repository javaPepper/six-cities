import { setRating } from '../../utils';
import { useState } from 'react';

type RatingComponentProps = {
  rateValue: number;
}

function RatingComponent(props: RatingComponentProps) {
  const { rateValue } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ ratingValue, setRatingValue ] = useState(0);

  return(
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={rateValue} id={`${rateValue}-stars`} type="radio"
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          setRatingValue(+value);
        }}
      />
      <label htmlFor={`${rateValue}-stars`} className="reviews__rating-label form__rating-label" title={`${setRating(rateValue)}`}><svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg></label>
    </>
  );
}

export default RatingComponent;
