import React from 'react'
import cardio from '../assets/cardio.jpg'
import group from '../assets/group.jpg'
import streching from '../assets/streching.jpg'
import strength from '../assets/strength.jpg'

const Services = () => {
  return (
    <div className='bg-white w-full py-16 flex flex-col pb-25'>
        <h1 className='uppercase font-bold md:text-4xl text-3xl text-[#00ADB5] mx-auto mt-[-20px]'>Choose your plan</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  border-b py-7'>
            <img src={cardio}  alt='cardio' width={460} className='m-auto'/>
            <div className='flex flex-col my-5'>
                <h1 className='mb-3 font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Cardio fit</h1>
                <p className='text-center px-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[15px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2  border-b py-7'>
            <div className='flex flex-col my-5'>
                <h1 className='mb-3  font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Group Antrenaments</h1>
                <p className='text-center px-2 mr-10'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[15px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
            <img src={group}  alt='group' width={460} className='md:order-none order-first m-auto'/>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 border-b py-7'>
            <img src={streching}  alt='streching' width={460} className='m-auto'/>
            <div className='flex flex-col my-5'>
                <h1 className='mb-3  font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Streching Classes</h1>
                <p className='text-center px-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[15px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-7'>
            <div className='flex flex-col my-5'>
                <h1 className='mb-3  font-bold md:text-3xl text-2xl text-[#00ADB5] mx-auto'>Strength Workout</h1>
                <p className='text-center px-2 mr-10'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <button className='w-[130px] mx-auto mt-[15px] p-2 bg-[#00ADB5] hover:bg-[#1687A7] rounded-md'>Learn More</button>
            </div>
            <img src={strength}  alt='strength' width={460} className='md:order-none order-first m-auto'/>
        </div>
    </div>
  )
}

export default Services