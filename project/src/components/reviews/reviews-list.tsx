import { Comment } from '../../types/comment';
import ReviewsItem from './reviews-item';

type ReviewsListProps = {
  comments: Comment[];
}

function ReviewsList({comments}: ReviewsListProps) {


  return(
    <ul className="reviews__list">
      {comments.map((comment) => <ReviewsItem key={comment.id} itemComment={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
