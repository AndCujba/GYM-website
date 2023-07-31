import React from 'react'

const Cards = () => {
  return (
    <div className='w-ful py-[6rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-8 hover:scale-105 duration-300 bg-white'>
                <h2 className='text-2xl font-bold text-center py-8'>Student</h2>
                <p className='text-center font-bold text-4xl'>39$/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>7:00-16:00 entry</p>
                    <p className='py-2 border-b mx-8'>Good for students</p>
                    <p className='py-2 border-b mx-8'>Saturday-Sunday</p>
                </div>
                <button className='text-white w-[200px] px-6 py-3 bg-[#00ADB5]  mx-auto my-6 rounded-md font-medium'>Start trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-4 md:my-0 hover:scale-105 duration-300 bg-white'>
                <h2 className='text-2xl font-bold text-center py-8'>Nelimited</h2>
                <p className='text-center font-bold text-4xl'>59$/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>7:00-23:00 entry</p>
                    <p className='py-2 border-b mx-8'>Nelimited time</p>
                    <p className='py-2 border-b mx-8'>Saturday-Sunday</p>
                </div>
                <button className='bg-gray-800 w-[200px] px-6 py-3 text-white  mx-auto my-10 rounded-md font-medium'>Start trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col rounded-lg p-4 my-8 hover:scale-105 duration-300 bg-white'>
                <h2 className='text-2xl font-bold text-center py-8'>Part-Time</h2>
                <p className='text-center font-bold text-4xl'>49$/month</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>7:00-13:00 entry</p>
                    <p className='py-2 border-b mx-8'>Good for students</p>
                    <p className='py-2 border-b mx-8'>Saturday-Sunday</p>
                </div>
                <button className='text-white w-[200px] px-6 py-3 bg-[#00ADB5]  mx-auto my-6 rounded-md font-medium'>Start trial</button>
            </div>

        </div>

    </div>
  )
}

export default Cards