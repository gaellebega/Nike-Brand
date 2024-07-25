import React from 'react'

const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div classname="flex flex-1 w-full max-sm:w-full">
      <img
      src={imgURL} alt={name} className='w-[280px] h-[280px]'
      />
      <div className='mt-8 fleex justify-start gap-2.5'>
<img src={star} alt='rating' width={24} height={24}/>
<p className='font-arial text-xl leading-normal text-gray-600'>(4.5)</p>
<h3 className='mt-2 text-2xl leading-normal font-semibold font-italic '>{name}</h3>
<p className='mt-2 font-semi-bold font-italic text-red-400 text-2xl leading-normal'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductsCard
