import { useState } from 'react';

function CommentForm() {
  const [ formData, SetFormData ] = useState('');
  console.log(formData);
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={''} onSubmit={(evt) => {
      evt.preventDefault();
      const { value } = evt.currentTarget;
      SetFormData(value);
    }}
    />
  );
}

export default CommentForm;
