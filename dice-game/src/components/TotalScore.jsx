import React from 'react'

const TotalScore = ({Score}) => {
  return (
    <div className='p-3 bg-slate-400 ml-20 rounded-xl' >
        <h1 className='text-8xl font-extrabold px-8' >{Score}</h1>
        <p className='text-xl '>TOTAL SCORE</p>
    </div>
  )
}

export default TotalScore