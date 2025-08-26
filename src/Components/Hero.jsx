import React from 'react';
import './header.css'

export default function Hero() {
  return (
    <div className="hero h-[716px]">
      <div className='pt-[250px] pl-[810px]'>
        <div className='bg-[#f9f1e7] rounded-xl p-10 max-w-xl'>
        
            <p className="text-black text-base font-semibold tracking-widest mb-4">New Arrival</p>
        <h1 className="text-[#b88e2f] text-4xl font-bold mb-6 leading-tight">
          Discover Our <br /> New Collection
        </h1>
        <p className=" text-base mb-8 rounded-md px-4 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#b88e2f] text-white font-bold text-base rounded px-10 py-4 hover:bg-[#a07a23] transition">
          BUY NOW
        </button>
      </div>
      </div>
    </div>
  );
}
