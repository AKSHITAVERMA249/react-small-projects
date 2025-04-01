import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { TbMessageShare } from "react-icons/tb";
import { IoCall } from "react-icons/io5";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' ,text: ''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
    <Navbar/>
    <main className='min-h-screen '>
    <div className='px-40 py-4'>
      <h1 className='font-extrabold text-6xl'>CONTACT US</h1>
      <h5 className='pt-6 '>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! <br /> WHETHER YOU HAVE A QUESTION, COMMENT, OR  JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR  BY PHONE, EMAIL, OR SOCIAL MEDIA. </h5>
    </div>
    <div className='flex flex-row px-40'>
      <div className='flex flex-col'>
      <div className=' flex flex-row gap-8'>
      <Button 
      leftIcon={<TbMessageShare/>}
      title="VIA SUPPORT CHAT"
      />
      <Button
      leftIcon={<IoCall/>}
      title="VIA CALL"
      />
     </div>
    <button className='flex flex-row justify-center gap-2 py-2 mt-3 border-2 rounded-lg border-solid border-black'><TbMessageShare/> VIA EMAIL FORM</button>
    <form onSubmit={handleSubmit} className='p-3'>
            <div className='flex flex-col '>
              <label className='font-semibold'>Name:</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='border-black border-2 p-2 '
                placeholder='Enter your name'
                required
              />
               <label className='font-semibold'>E-mail:</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='border-black border-2 p-2 '
                placeholder='Enter your email'
                required
              />
               <label className='font-semibold'>Text:</label>
              <input
                type='text'
                name='Text'
                value={formData.Text}
                onChange={handleChange}
                className='border-black border-2 p-2 '
                placeholder='Enter the Text'
                required
              />
               <button className='flex flex-row justify-center gap-2 py-2 mt-3 bg-black text-white text-xl rounded-lg '>SUBMIT</button>
   
              
              </div>
              </form>

              
    </div>
    
      <div className='w-1/2 ml-8'><img className='' src="/images/Service 24_7-pana 1.svg" alt="service image" /></div>
    </div>
    </main>
    </>
  )
}

export default App
