import React from 'react'
import { footerLinks } from '../constants'
const Footer = () => {
  return (
    <footer className='max-container'> 
    <div className='flex justify-between gap-20 flex-wrap items-start max-lg:flex-col'>
      <div className='flex flex-col items-start '>
<a href='/'></a>
<img src='/Nike/nogo.jpg' w={150} height={46} className=''/>
    <p className='mt-6 leading-7 font-arial text-gray-400 sm:max-w-sm text-base'>Get your shoes ready for the new term at your nearest Nike store.Get Rewards </p> 
     <div className='flex items-center gap-5 mt-8'>
      {socialMedia.map((icon)=>(
        <div className='flex justify-center w-12 h-12 bg-white rounded-full'>
          <img src={icon.src}
          alt={icon.alt}
          width={24}
          height={24}
          />
        </div>
      ))}

     </div>
     
      </div>
      <div className='flex flex-1 justify-betweenlg:gap-10 gap-20 flex-wrap '>
{footerLinks.map((section) =>(
  <div key={section}>
   <h4 className='text-white font- text-2xl leading-normal mb-6 '>{section.tittle}
    </h4> 
    <ul>{section.links.map((link)=>{
      <li className='mt-3 text-white-400 font-arial text-base heading-normal hover:text-wite cursor-pointer'
      key={link.name}>

        <a>{link.name}</a>
        </li>
    })}
    </ul>
  </div>
  ))}
      </div>
    </div>
    </footer>
  
  )
}

export default Footer
