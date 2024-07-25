// import {React, useState } from 'react'
// import Button from './Button'
// import { statistics,shoes } from '../constants'
// import ShoeCard from './ShoeCard'
// import {shoe,n6} from '../assets/Brand'


// const Hero = () => {
//   const [bigShoeImg, setBigShoeImg] = {
//     useState(n6),
//   }
//   return (
//   <section
//   id='home'
//   className='w-full gap-10 max-container flex xl:flex-row min-h-screen justify-center border-2 border-red-500 p-2'>
// <div className='relative xl:1-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 px-8 pt-28'>
// <p className='text-xl font-arila text-red-400'>Our Summer Collection</p>
// <h1 className='mt-10 font-arial text-8xl max sm:text:[720px] max-sm:leading-[82] font-bold'><span className='xl:bg-white xl:whitespace-nowraprelative z-10 pr-10'>The New Arrival</span><br/>
// <span className='inline-block text-red-400 mt-3'>Nike </span> Shoes
// </h1>

// <p className='font-arial text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, qauality comfort, and innovation for your active life </p>

// <Button label='Shop now' /*iconURL={arrowRight}*//>
// <div className='flex justify-start flex-wrap w-full mt-20 items-start gap-16'>
// {statistics.map((stat) => (
//   <div key={stat.label}>
//     <p className='text-4xl font-palanqin font-bold'>{stat.value}</p>
//     <p className='leading-7 font-arial'>{stat.label}</p>
//   </div>
// ))}
// </div>
// </div>
// <div className='flex  relative  justify-center items-center xl:min-h-screen max-xl:py-40 bg-purple-200 bg-cover bg-center'>
//   <img src={bigShoeImg} alt='shoe collection' width={610} height={500} className='object-contain relative mt-20 z-10'/>
//   <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max:sm:px-6'>
//   {shoes.map((shoe,index) => (
//   <div key={shoe}>
// <ShoeCard
// imgURL={shoe}
// changeBigShoeImage={(shoe)=> setBigShoeImg(shoe)}

// bigShoeImg={n6}
// />
// </div>
//  ))}
//   </div>
// </div>


//   </section>
//   )
// }

// export default Hero
