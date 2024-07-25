import React from 'react'
import {products} from '../constants'
import PopularProductsCard from './PopularProductsCard'
const PopularProducts = () => {
  return (
   <section id='products' className='max-container max:sm:mt-12 
   max-sm:mt-12'>
<div className='flex flex-col justify-start gap-5'>
<h2 className='text-4xl font-arial font-bold'><span className='text-red-400'>popular </span> products</h2>
<p className='lg:max-w-lg mt-2 font-arial text-gray-600 '>consectetur adipisicing elit. Excepturi delectus iusto, adipisci molestias dicta ea. Ab eum debitis atque voluptate voluptatum, dolore veritatis nobis obcaecati,
   in ex tempora possimus eius.</p>
</div>
<div className='mt-16 grid lg:grid-col-4  md:grid-col-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap:14'>
{products.map((product)=>(
  <PopularProductsCard key={product.name}{...product}/>
))}
</div>
   </section>
  )
}

export default PopularProducts
