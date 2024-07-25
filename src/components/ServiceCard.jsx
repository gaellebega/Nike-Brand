import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]
    shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 justify-center items-center bg-red-400
      rounded-full'>
        <img src={imgURL} alt={label} 
        width={24} height={24}
        />
      </div>
      <h3 className='mt-5 font-ariaL leading-normal text-3xl font-bold'>{label}</h3>
      <p className='mt-3 break-words font-arial text-lg leading-normal text-gray-600 '>{subtext}</p>
    </div>
  )
}

export default ServiceCard
