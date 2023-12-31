import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import './Reviews.scss';
import Review from '../review/Review';
import newRequest from '../../../utils/newRequest';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

function Reviews({ serviceId }) {
  const queryClient = useQueryClient();
  const [errorMessage, setErrorMessage] = useState(null);
  const [displayedReviews, setDisplayedReviews] = useState(4); // Initial number of reviews to display

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews", serviceId],
    queryFn: () =>
      newRequest.get(`/reviews/${serviceId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews", serviceId]);
    },
    onError: (error) => {
      // Assuming your backend sends the error message in the response data
      setErrorMessage(error?.response?.data?.message || "Error submitting review.");
    },
  });

  const handleLoadMore = () => {
    setDisplayedReviews((prevCount) => prevCount + 4);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ serviceId, desc, star });
  };

  return (
    <div className='review'>
      <h2 className='a-r'>Reviews ({data ? data.length : 0})</h2>
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong!"
        : data.length > 0
        ? data.slice(0, displayedReviews).map((review) => <Review key={review._id} review={review} />)
        : <p className='no-reviews-text'>No reviews yet</p>
      }

      {errorMessage && (
        <p className='error-box'>{errorMessage}</p>
      )}

      {data && data.length > displayedReviews && (
        <div>
          <button className='load-more-button1' onClick={handleLoadMore}>
            View More Reviews
            <CallMissedOutgoingIcon className='load-more-icon1' />
          </button>
        </div>
      )}
    
      <h1 className='review-service'>Review this service</h1>

      <form action="" onSubmit={handleSubmit} className='create-review'>
        <input className='input-review' placeholder='Write your opinion' />
        <p className='select-rating'>Select Rating</p>
        <select className='select-star' name='' id=''>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button className='review-button' disabled={mutation.isLoading}>
          {mutation.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Reviews;
