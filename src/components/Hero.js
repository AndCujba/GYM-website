import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full mx-auto text-center flex flex-col h-screen justify-center' >
            <h3 className='font-bold p-2 text-[#00ADB5]'>WE GROW TOGETHER</h3>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-2xl font-bold'>Transform your </p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 uppercase text-[#00ADB5]' strings={['life', 'body']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='p-3 text-gray-300 md:text-2xl text-xl'>“Do something today that your future self will thank you for.”</p>
            <div className='flex md:flex-row justify-center md:my-7 items-center flex-col'>
                <button className='w-[130px] p-2 m-1 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md text-lg'>Get started</button>
                <p className='m-2 text-[#1687A7] hover:underline'>Request a tour</p>
            </div>
        </div>
        
    </div>
        
  )
}

export default Hero