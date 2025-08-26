import React from 'react'
import logo from '../assets/Mask.png'
import logo1 from '../assets/Mask1.png'
import logo2 from '../assets/img.png'

export default function Hero1() {
  return (
    <div>

        <div className='flex items-center justify-center flex-col mt-20 gap-3.5'>
            <h1 className='text-4xl font-bold'>Browse The Range</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <br /><br />

        <div className='flex items-center justify-center gap-5'>
            <div className='flex items-center justify-center flex-col gap-3.5'>
                <img src={logo} alt="" />
            <h1 className='text-lg font-bold'>Dining</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-3.5'>
                <img src={logo1} alt="" />
                <h1 className='text-lg font-bold'>Living</h1>
            </div>
            <div className='flex items-center justify-center flex-col gap-3.5'>
                <img src={logo2} alt="" />
                <h1 className='text-lg font-bold'>Bedroom</h1>
            </div>
        </div>
      
    </div>
  )
}
