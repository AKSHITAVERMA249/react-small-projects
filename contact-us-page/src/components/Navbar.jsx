import React from 'react'

const Navbar = () => {
  return (
    <header>
    <div className=' bg-blue-100 flex flex-row items-center justify-between w-full h-30 '>
         <div>  <img className='w-15 h-20 ml-20 cursor-pointer' src="/images/WhatsApp Image 2025-03-29 at 1.36.23 PM.jpeg" alt="" /></div>
        <div className='mr-20'><ul className='flex flex-row gap-7 text-2xl font-semibold cursor-pointer'>
            <li href='/home'>HOME</li>
            <li href='/about'>ABOUT</li>
            <li href='/contact'>CONTACT</li>
            </ul></div>
    </div>
    </header>
  )
}

export default Navbar