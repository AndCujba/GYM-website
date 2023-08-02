import React from 'react'
import trainer1 from '../assets/trainer1.jpg'
import trainer2 from '../assets/trainer2.jpg'
import trainer3 from '../assets/trainer3.jpg'
import trainer4 from '../assets/trainer4.jpg'
import trainer5 from '../assets/trainer5.jpg'

const Team = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-[4rem]'>
        <h1 className='uppercase font-bold md:text-3xl text-2xl text-[#00ADB5] text-center '>Meet Our Team</h1>
        <p className='text-center mb-7 text-xl text-gray-300'>Choose your personal trainer and get in touch now!</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-7'>
            <div className='sm:mb-10'>
                <img src={trainer1} alt='trainer1' width={15} className='object-contain h-48 w-96 mx-auto'/>
                <h1 className='text-center bold text-white mt-1 uppercase'>Popov Cristian</h1>
                <p className='text-center italic text-[#00ADB5]'>22y.o. Trainer</p>
            </div>
            <div className='sm:mb-10'>
                <img src={trainer2} alt='trainer2' width={15} className='object-contain h-48 w-96  mx-auto'/>
                <h1 className='text-center bold text-white mt-1 uppercase'>Arnaut Vasile</h1>
                <p className='text-center italic text-[#00ADB5]'>27y.o. Crossfit Trainer</p>
            </div>
            <div className='sm:mb-10'>
                <img src={trainer3} alt='trainer3' width={15} className='object-contain h-48 w-96  mx-auto'/>
                <h1 className='text-center bold text-white mt-1 uppercase'>Ciucun Roxana</h1>
                <p className='text-center italic text-[#00ADB5]'>24y.o. Streching Trainer</p>
            </div>
            <div className='sm:mb-10'>
                <img src={trainer5} alt='trainer4' width={15} className='object-contain h-48 w-96  mx-auto'/>
                <h1 className='text-center bold text-white mt-1 uppercase'>Ivanov Irina</h1>
                <p className='text-center italic text-[#00ADB5]'>31y.o. Trainer</p>
            </div>

        </div>
        
    </div>
  )
}

export default Team