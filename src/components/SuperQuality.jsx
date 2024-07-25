import React from 'react'

const SuperQuality = () => {
  return (
   <section
   id='#about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container '>
    <div className='flex flex-1 flex-col'>


<h2 className='font-arial text-4xl lg:max-w-lg font-bold'><span className='xl:bg-white xl:whitespace-nowraprelative z-10 pr-10'>we provide you 
  </span><br/>
<span className=' text-red-400 '>Super</span> 
<span className=' text-red-400 '>Quality</span> shoes</h2>
<p className='mt-4 lg:max-w-lg info-text'>Lorem ipsum dolor
   sit amet consectetur adipisicing elit.
   Necessitatibus, eveniet! Dolorem molestias voluptas
    a maiores perspiciatis temporibus veniam non 
   reprehenderit, itaque fugit ex dolores adipisci hic 
  similique reiciendis illo! Tempora. </p>
<p className='mt-g lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction</p>
<div className='mt-11 '>
<Button label='View details'/>
</div>
</div>
<div className='flex-1 flex justify-center items-center '>
  <img src='/Nike/n1.jpg' width={570} height={522} className='object-contain'/>
</div>
   </section>
  )
}

export default SuperQuality
