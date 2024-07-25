import React from 'react'

const Subscribe = () => {
  return (
 <section id='contact-us'className='max-container flex justify-between max-lg:flex-col gap-10'>
<h3 className='leading-[68px] text-red-400 font-arial text-4xl lg:max-w-md font-bold'>Sign Up For
<span className='text-red-400'> Updates</span>
</h3>&Newsletter
<div className=' lg:max-w-[40%] w-full flex items-center max:sm:flex-col p-2.5  gap-5 sm:border sm:border-gray-500 rounded-full'>
  <input type='text' placeholder='subscribe@nike.com' className='input'/>
  <div className='flex max-sm:justify-end items-center max-sm:w-full'>
    <Button label='Signup' fullWidth/>
  </div>
</div>
 </section>
  )
}

export default Subscribe
