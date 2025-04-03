import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice'
import { useState } from 'react'
import { LiaDiceD6Solid } from "react-icons/lia";
import { BiReset } from "react-icons/bi";
import { FcRules } from "react-icons/fc";
import Rules from './Rules'
const GamePlay = () => {
    const [error, seterror] = useState("")
    const [Score, setScore] = useState(0)
    const [selectedNumber, setselectedNumber] = useState();
    const [currentDice, setcurrentDice] = useState(1);
    const [showrules, setshowrules] = useState(false);
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random() * (max - min )+min);
    };
    const rollDice=()=>{
        if(!selectedNumber) {
            seterror("You have not Selected any number")
            return;
        };
        seterror("");
        const randomNumber=generateRandomNumber(1,7);
        setcurrentDice((prev)=>randomNumber);
        

        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber)
        }else{
            setScore((prev)=> prev-2)
        }
        setselectedNumber(undefined);
    };
    const resetScore=()=>{
        setScore(0);
    }

  return (
    <div className=' bg-slate-400 h-screen '>
    <div className=' flex flex-row justify-stretch pt-8'>
        <TotalScore
        Score={Score}
        />
        <NumberSelector
        error={error}
        selectedNumber={selectedNumber}
        setselectedNumber={setselectedNumber}
        />
       
    </div>
   
    <div className=' flex  justify-self-center  flex-col'>
    <RollDice
    currentDice={currentDice}
    rollDice={rollDice}
    />
    
     <p className='flex flex-row gap-2 py-3 justify-center text-2xl font-mono'>Click the Dice to ROLL <LiaDiceD6Solid/> </p>
   
     <button onClick={resetScore} className='  w-64 p-3 ml-8 flex flex-row justify-center gap-2 bg-white text-black text-2xl  border-5  border-black rounded-lg  hover:bg-black hover:text-white transition-all duration-300'>RESET SCORE <BiReset/></button>
     <button onClick={()=>setshowrules((prev)=>!prev)} className='  w-64 p-3 ml-8 mt-3 flex flex-row justify-center gap-2 bg-black text-white text-2xl  border-5  border-black rounded-lg  hover:bg-blue-400 hover:text-black transition-all duration-300'>{showrules ? "Hide":"Show" }  RULES <FcRules/></button>
   
    </div>
    {showrules && <Rules/>}
   </div>
  )
}

export default GamePlay