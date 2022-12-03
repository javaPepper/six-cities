import { FormEvent, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { INPUT_VALUES } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchPostCommentAction } from '../../store/api-actions';
import { PostData } from '../../types/post-data';
import RatingComponent from '../rating-component/rating-component';
import { setRatingValue } from '../../store/actions';

function CommentForm() {
  const formDataRef = useRef<null | HTMLTextAreaElement>(null);
  const ratingValue = useAppSelector((state) => state.ratingValue);
  const { id } = useParams<{id:string}>();
  const dispatch = useAppDispatch();

  const onSubmit = (postData: PostData) => {
    dispatch(fetchPostCommentAction(postData));
  };

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if(formDataRef.current !== null && ratingValue !== null && id) {
      onSubmit({comment: formDataRef.current.value, rating: ratingValue, id: id});
      formDataRef.current.value = '';
      dispatch(setRatingValue(0));
      console.log(ratingValue);

    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleOnSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {INPUT_VALUES.map((number) => (<RatingComponent rateValue={number} key={number}/>))}
      </div>
      <textarea ref = {formDataRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={''}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        {formDataRef ? <button className="reviews__submit form__submit button" type="submit" >Submit</button> : <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>}
      </div>
    </form>
  );
}

export default CommentForm;
