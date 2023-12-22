import React from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import './Reviews.scss';
import Review from '../review/Review';
import newRequest from '../../../utils/newRequest';

function Reviews({ serviceId }) {
  const queryClient = useQueryClient();

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
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ serviceId, desc, star });
  };

  return (
    <div className='review'>
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong!"
        : data.length > 0
        ? data.map((review) => <Review key={review._id} review={review} />)
        : <p className='no-reviews-text'>No reviews yet</p>
      }

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
        <button className='review-button'>Submit</button>
      </form>
    </div>
  );
}

export default Reviews;
