import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Navbar() {
const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav);
}

  return (
    <div className='flex justify-between h-24 items-center max-w-[1240px] mx-auto px-4'>
        <Link to='/' >
          <h1 className='w-full text-3xl font-bold justify-start text-[#00ADB5]'>GYM</h1>  
        </Link>
        <ul className='hidden md:flex text-white'>
          <Link to='/' ><li className='p-4'>Home</li></Link>
          <Link to='/services' ><li className='p-4'>Services</li></Link>
          <Link to='/team' ><li className='p-4'>Our Team</li></Link>
          <Link to='/cards' ><li className='p-4'>Prices</li></Link>
          <Link to='/newsletter' ><li className='p-4'>Newsletter</li></Link>
        </ul>
        <div onClick={handleNav} className='md:hidden block '>
            {!nav ? <AiOutlineClose size= {20}/> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={!nav ? ' md:hidden fixed left-0 top-0 w-[50%] border-r border-r-gray-900 h-full bg-[#222831] ease-in-out duration-200' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold justify-start p-5 text-[#00ADB5]'>GYM</h1>
        <ul className='pt-22 uppercase text-white'>
          <Link to='/' ><li className='p-4 border-b border-gray-600'>Home</li></Link>
          <Link to='/services' ><li className='p-4 border-b border-gray-600'>Services</li></Link>
          <Link to='/team' ><li className='p-4 border-b border-gray-600'>Our Team</li></Link>
          <Link to='/cards' ><li className='p-4 border-b border-gray-600'>Prices</li></Link>
          <Link to='/newsletter' ><li className='p-4 border-b border-gray-600'>Newsletter</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar