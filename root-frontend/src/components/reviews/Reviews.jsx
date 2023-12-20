import React from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import './Reviews.scss'
import Review from '../review/Review'

import newRequest from '../../../utils/newRequest';

function Reviews({serviceId}) {

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${serviceId}`).then((res) => {
        return res.data;
      }),
  });

 

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
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
        ? "loading"
        : error
        ? "Something went wrong!"
        : data.map((review) => <Review key={review._id} review={review} />)}


        <h1 className='review-service'>Review this service</h1>

      <form action=""  onSubmit={handleSubmit} className='create-review'>

          <input className='input-review'  placeholder='Write your opinion'/>

          <p className='select-rating' >Select Rating</p>

          <select className='select-star' name="" id="">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>

          <button className='review-button'>Submit</button>

            
      </form> 
   


    </div>
  )
}

export default Reviews