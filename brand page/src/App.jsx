import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className='flex flex-row ml-40 mr-40 mt-20'>
        <div className='flex flex-col place-items-start w-1/2'>
          <h1 className='font-extrabold text-9xl'>YOUR FEET <br />
              DESERVE<br />
              THE BEST</h1>
              <h4 className=' mt-10 text-xl'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH <br /> OUR SHOES.</h4>
              <div className='cursor-pointer'><button className='bg-red-700 mt-10 px-8 py-3 text-xl text-white mr-8'>SHOP NOW</button>
              <button className='bg-pink-300 mt-10 px-8 py-3 text-xl text-black'>CATEGORY</button></div>
        </div>
        <div className='w-1/2 '>
        <img className='cursor-pointer' src="/images/shoe_image.png" alt="shoe-image" /></div>

      </div>
    </>
  )
}

export default App
