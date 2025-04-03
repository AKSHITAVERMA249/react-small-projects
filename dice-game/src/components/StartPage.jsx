import React from 'react'

const StartPage = ({startGame}) => {
  return (
    <div className='flex flex-row p-20 justify-center ml-auto mr-auto bg-slate-400 h-screen'>
      <div>
        <img  src="/images/dices 1.png" alt="Dice" className='bounce' />
      </div>
     <div className='flex flex-col justify-center content-center ml-10'>
      <h1 className='text-8xl font-extrabold py-5'>DICE GAME</h1>
      <button onClick={startGame} className='bg-black text-white text-2xl rounded-lg px-12 py-3 hover:bg-white hover:text-black transition-all duration-300'>Play Now</button>
      </div>
</div>
  )
}

export default StartPage