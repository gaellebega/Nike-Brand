import React from 'react'

const Button = ({label,iconURL,fullWidth}) => {
  return (
<button className='flex justify-center items-center gap-2 py-4 px-7 border 
font-arial text-lg leading-none rounded-full
 text-white bg-red-400 border-red-400'>
{label}
$`{fullWidth && 'w-full'}`
  <img   alt="arrowRight" className='ml-2 rounded-full w-5 h-5 '/>
  {/* /* src= {iconURL}/* */}

</button>
  )
}

export default Button
