import React from 'react'
import { useState } from 'react';
const NumberSelector = ({error, selectedNumber, setselectedNumber}) => {
    const dicenumber= [1,2,3,4,5,6];
    
  return (
    <div className=''>
        <p className='text-2xl text-red-600'>{error}</p>
       {dicenumber.map((value,i)=> <button 
       
       className={`p-7 text-2xl border-4 border-black rounded-lg transition-all duration-500 
        ${value === selectedNumber ? 'bg-black text-white font-semibold text-3xl' : 'bg-white text-black hover:bg-black hover:text-white'}`}   key={i}
       onClick={()=>setselectedNumber(value)}
       
       >{value}</button>)}
       
        
    </div>
  )
}

export default NumberSelector