import React from 'react'

const Navbar = () => {
  return (
    <header>
         <div className='bg-white text-black text-2xl  flex items-center justify-between w-full h-28 '> 
          <img className='w-78px h-16 ml-12 ' src="/images/brand_logo.png" alt="logo" />
            <ul className='cursor-pointer flex flex-row gap-5'> <li>MENU</li>
                      <li href='/home'>LOCATION</li>
                      <li href='/home'>ABOUT</li>
                      <li href='/home'>CONTACT</li>
                    </ul>
            <div><button className='bg-red-700 cursor-pointer mr-12 px-4 py-1 text-white'>Login</button></div>
         </div>
         
    </header>
   
  )
}

export default Navbar