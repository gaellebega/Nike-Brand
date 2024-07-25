import React from 'react'
import { reviews } from '../constants'
import ReviewCard from './ReviewCard'
const CustomerRevie = () => {
  return (
   <section className='max-container'>
    <h3 className='font-arial font-bold text-center text-4xl'>what are<span className='text-red-400 '>customers</span> Say?</h3>
    <p className='innfo-text m-auto mt-4 max-w-lg text-center '>Here stisfied stories from our customers</p>
    
    <div className='mt-24 flex flex-1 items-center max:lg:flex-col gap-14 justify-evenly '>
      {reviews.map((review)=> (
        <ReviewCard
        key={review.CustomerName}
        imgURL={review.imgURL}
        CustomerName={review.CustomerName}
        rating={review.rating}
        feedback={review.feedback}
        />
      ))}
    </div>
   </section>
  )
}

export default CustomerRevie
