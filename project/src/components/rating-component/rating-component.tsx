import { setRating } from '../../utils';
import { HTMLAttributes } from 'react';

type RatingComponentProps = {
  rateValue: number;
} & HTMLAttributes<HTMLDivElement>

function RatingComponent(props: RatingComponentProps) {
  const { rateValue, onChange } = props;

  return(
    <div className="reviews__rating-form form__rating">
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={rateValue} id={`${rateValue}-stars`} type="radio"
        onChange={onChange}
      />
      <label htmlFor={`${rateValue}-stars`} className="reviews__rating-label form__rating-label" title={`${setRating(rateValue)}`}><svg className="form__star-image" width={37} height={33}><use xlinkHref="#icon-star" /></svg></label>
    </div>
  );
}

export default RatingComponent;
