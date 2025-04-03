import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StartPage from './components/StartPage'
import GamePlay from './components/GamePlay'
import Rules from './components/Rules'

function App() {
 const [isGameStarted, setisGameStarted] = useState(false);
 const toggleGamePlay = ()=>{
  setisGameStarted((prev)=>!prev);
 }
 

  return (
    <>
  {isGameStarted ? <GamePlay /> : <StartPage 
  startGame= {toggleGamePlay}
  />}

    </>
  )
}

export default App
