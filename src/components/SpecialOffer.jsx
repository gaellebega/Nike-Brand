import React from 'react'

const SpecialOffer = () => {
  return (
    //amazing classname
   <section className='flex justify-wrap items-center
   max-xl:flex-col-reverse gap-10 max-container'>
     <div className='flex-1 '>
<img src='/Nike/n2.jpg' width={773} height={687} className='object-contain w-full'  />
</div>
<div className='flex flex-1 flex-col'>


<h2 className='font-arial text-4xl lg:max-w-lg font-bold'><span className='xl:bg-white xl:whitespace-nowraprelative z-10 pr-10'> 
  </span>
<span className=' text-red-400 '>Special
  </span> Offer</h2>
<p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor
   sit amet consectetur adipisicing elit.
   Necessitatibus, eveniet! Dolorem molestias voluptas
    a maiores perspiciatis temporibus veniam non 
   reprehenderit, itaque fugit ex dolores adipisci hic 
  similique reiciendis illo! Tempora. </p>
<p className='mt-g lg:max-w-lg info-text'>
  Our dedication to detail and excellence ensures your satisfaction
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
   minus accusamus dicta tempora itaque praesentium illo exercitationem
    quos libero culpa quo, ullam, recusandae consequuntur. 
   temporibus nihil architecto labore.</p>
<div className='mt-11 flex flex-wrap gap-4'>
<Button label='Buy Now' />
<Button label='Learn More'
className='bg-red-300 border-gray-400 text-gray-400'/>
</div>
</div>

   </section>
  )
}

export default SpecialOffer
