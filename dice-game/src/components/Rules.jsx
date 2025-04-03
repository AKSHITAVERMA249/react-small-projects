import React from 'react'

const Rules = () => {
  return (
    <div className='bg-red-300 rounded-xl flex justify-center'>
       <h2 className='text-2xl'>How to play DICE GAME:</h2> 
        <ul>
            <li>1.Select any number</li>
            <li>2.Click on dice image</li>
            <li>3.after clicking on  dice  if selected number is equal to dice number you will get same point as dice</li>
            <li>4.if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </div>
  )
}

export default Rules