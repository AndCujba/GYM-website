import React from 'react'
import trainer1 from '../assets/trainer1.jpg'
import trainer2 from '../assets/trainer2.jpg'
import trainer3 from '../assets/trainer3.jpg'
import trainer4 from '../assets/trainer4.jpg'
import trainer5 from '../assets/trainer5.jpg'

const Team = () => {
  return (
    <div>
        <h1 className='uppercase font-bold md:text-3xl text-2xl text-[#00ADB5] text-center my-10'>Meet Our Team</h1>
        <div className='flex flex-row'>
            <div>
                <img src={trainer1} alt='trainer1' width={200} className='object-contain h-48 w-96 '/>
                <h2 className=''>Popov Cristian</h2>
                <p>22 y.o. Crossfit Trainer</p>
            </div>

        </div>
        
    </div>
  )
}

export default Team