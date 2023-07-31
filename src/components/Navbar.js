import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav);
}

  return (
    <div className='flex justify-between h-24 items-center max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-3xl font-bold justify-start text-[#00ADB5]'>GYM</h1>
        <ul className='hidden md:flex text-white'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Schedule</li>
          <li className='p-4'>Trainers</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='md:hidden block '>
            {!nav ? <AiOutlineClose size= {20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={!nav ? ' md:hidden fixed left-0 top-0 w-[50%] border-r border-r-gray-900 h-full bg-[#222831] ease-in-out duration-200' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold justify-start p-5 text-[#00ADB5]'>GYM</h1>
        <ul className='pt-22 uppercase text-white'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Schedule</li>
            <li className='p-4 border-b border-gray-600'>Trainers</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar