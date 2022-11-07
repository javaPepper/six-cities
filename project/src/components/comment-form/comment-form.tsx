import { useState } from 'react';
import { INPUTVALUES } from '../../const';
import RatingComponent from '../rating-component/rating-component';

function CommentForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ formData, setFormData ] = useState('');

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {INPUTVALUES.map((number) => (<RatingComponent rateValue={number} key={number}/>))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={''}
        onChange={(evt) => {
          const { value } = evt.currentTarget;
          setFormData(value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
