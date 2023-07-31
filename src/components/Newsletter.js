import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 bg-[#222831] px-4 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-bold md:text-3xl text-2xl text-[#00ADB5] py-2'>Join us to get notified about our hottest offers!</h1>
                <p className='italic text-white'>Don't miss the opportunity to get your dream body</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center w-full'>
                    <input type='email' placeholder='Your Email' className='bg-gray-200 p-3 w-full  text-black rounded-md'/>
                    <button className='text-black w-[200px] mx-auto p-2 bg-[#1687A7] ml-4 my-6 px-6 py-3 rounded-md font-medium'>Submit</button>
                </div>
                <p>Stay up to date with us and read our <span className='text-[#1687A7]'>Privacy Policy. </span></p>
            </div>

        </div>

    </div>
  )
}

export default Newsletter