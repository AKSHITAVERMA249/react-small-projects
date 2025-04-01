import React from 'react'
const Button = ({title, leftIcon}) => {
  return (
    <div > <button className=' bg-black text-white text-xl flex flex-row gap-2 px-6 py-3 rounded-lg shadow-2xl w-full'> {leftIcon} {title}</button></div>
  )
}

export default Button