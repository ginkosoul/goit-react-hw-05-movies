import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error.messge));
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews && reviews.length ? (
        reviews.map(review => (
          <StyledItem key={review.id}>
            <h4>{review.author}</h4>
            <p>{review['created_at']}</p>
            <p>{review.content}</p>
          </StyledItem>
        ))
      ) : (
        <p>Noone left any reviews yet...</p>
      )}
    </div>
  );
};

export default Reviews;

const StyledItem = styled.div`
  display: block;
  border-radius: 8px;
  border: 1px solid lightgray;
  padding: 8px 16px;
  font-size: 14px;
`;
