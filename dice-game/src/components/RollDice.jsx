import React from 'react'
import { useState } from 'react';
const RollDice = ({currentDice, rollDice}) => {
   
    

  return (
    <div>
        <img className='cursor-pointer flex justify-self-center' 
        onClick={rollDice}
        src={`/images/dice_${currentDice}.png`} alt="Dice_1" />
    </div>
  )
}

export default RollDice