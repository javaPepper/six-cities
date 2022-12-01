import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { setComments } from '../../store/actions';
import { Comment } from '../../types/comment';
import ReviewsItem from './reviews-item';

type ReviewsListProps = {
  commentss: Comment[];
}

function ReviewsList({commentss}: ReviewsListProps) {
  const comments = useAppSelector((state) => state.comments);

  useEffect(() => {
    setComments(comments);
  }, [comments]);


  return(
    <ul className="reviews__list">
      {commentss.map((comment) => <ReviewsItem key={comment.id} itemComment={comment}/>)}
    </ul>
  );
}

export default ReviewsList;
