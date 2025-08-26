import React from 'react'
import './Contact.css'

export default function Contect() {
  return (
    <div className='container mx-auto px-[50px] py-[70px]'>
       <div className='contact-title'>
        <h1 className='m'>Get In Touch With Us</h1>
        <h3 className='m2'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h3>
       </div>

       <div className="flex justify-center gap-10 p-[40px]">

        <div className='w-[393px] flex flex-col gap-8'>
            <div className='max-w-[212px]'>
                <h3 className='font-bold'>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>

            <div className='max-w-[212px]'>
                <h3 className='font-bold'>Phone</h3>
                <p>2Mobile: +(84) 546-6789
Hotline: +(84) 456-6789</p>
            </div>

            <div className='max-w-[212px]'>
                <h3 className='font-bold'>Working Time</h3>
                <p>Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00</p>
            </div>
        </div>

       <div className='flex flex-col w-[528px] gap-4'>
         <div className='flex flex-col'>
             <label htmlFor="text1">Your name</label>
             <textarea className='h-[75px] mt-3 px-6 border rounded-lg' type="text" placeholder='Abc'  />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="text2">Email address</label>
          <textarea className='h-[75px] mt-3 px-6 border rounded-lg' type="text" placeholder='Abc@def.com' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Subject</label>
          <textarea className='h-[75px] mt-3 px-6 border rounded-lg' type="text" placeholder='This is an optional' />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="">Message</label>
          <textarea className='h-[120px] mt-3 px-6 border rounded-lg' type="text" placeholder='Hi! i’d like to ask about' />
        </div>

        <button className='m9'>Submit</button>
       </div>
       </div>
    </div>
  )
}
