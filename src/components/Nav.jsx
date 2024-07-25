import React from 'react'
// import {n1} from '../assets/Nike'
// import {n2} from '../assets/Nike'
import { navLinks } from '../constants'
const Nav = () => {
  return (
  <header className='py-8 absolute z-10 w-full sm:px-16 px-8'>
    <nav className='flex justify-between items-center max-container'>
      <a href="/">
          <img src="/Nike/nogo.jpg" alt='logo' width={99} height={16}/>
      </a>
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            { navLinks.map((item) => (
           <li key={item.label}>
             <a href={item.href} className='font-montserrat leading-normal font-arial font-semibold text-lg text-gray-600 '>
                  {item.label}
             </a>
            </li>
            ))}
         </ul>
         <div className=''>
          
          <div className='hidden font-bold text-lg cursor-pointer space-x-8 focus:outline-none max-lg:block text-slate-500' arial-label='main'>&#9776;</div>
         </div>
    </nav>
  </header>
  )
}

export default Nav
