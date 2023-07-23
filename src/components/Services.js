import React from 'react'
import cardio from '../assets/cardio.jpg'
import group from '../assets/group.jpg'
import streching from '../assets/streching.jpg'
import strength from '../assets/strength.jpg'

const Services = () => {
  return (
    <div className='bg-white w-full py-16 px-4 flex gap-7 flex-col'>
    <h1 className='pb-10 uppercase font-bold md:text-4xl text-2xl text-[#00ADB5] mx-auto'>Choose your plan</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={cardio}  alt='cardio' width={560}/>
            <div className='flex flex-col mt-10'>
                <h1 className='py-2 uppercase font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Cardio fit</h1>
                <p className='text-center px-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[30px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col mt-10'>
                <h1 className='py-2 uppercase font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Group Antrenaments</h1>
                <p className='text-center px-2 mr-10'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[30px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
            <img src={group}  alt='group' width={560}/>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={streching}  alt='streching' width={560}/>
            <div className='flex flex-col mt-10'>
                <h1 className='py-2 uppercase font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Streching Classes</h1>
                <p className='text-center px-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[30px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col mt-10'>
                <h1 className='py-2 uppercase font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Strength Workout</h1>
                <p className='text-center px-2 mr-10'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[30px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
            <img src={strength}  alt='strength' width={560}/>
        </div>
    </div>
  )
}

export default Services