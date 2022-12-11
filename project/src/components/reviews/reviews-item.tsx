import { Comment } from '../../types/comment';
import { getRating } from '../../utils';

type ReviewsItemProps = {
  itemComment: Comment;
}

function ReviewsItem({itemComment}: ReviewsItemProps) {
  const { rating, comment, user } = itemComment;
  let { date } = itemComment;
  date = new Date().toDateString().slice(3, 15);

  return(
    <li className="reviews__item">
      <div className="reviews__user user" >
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>

  );
}

export default ReviewsItem;
