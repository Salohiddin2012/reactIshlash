import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-white border-t border-gray-200 text-gray-600 py-10 px-4 md:px-8 lg:px-12 xl:px-20 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Funiro.</h2>
          <p className="text-sm">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase">Links</h3>
          <ul className="space-y-3 text-sm">
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">Home</a></li>
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">Shop</a></li>
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">About</a></li>
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">Contact</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase">Help</h3>
          <ul className="space-y-3 text-sm">
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">Payment Options</a></li>
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">Returns</a></li>
            <br /><br />
            <li><a href="" className="hover:text-gray-900 font-bold">Privacy Policies</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase">Newsletter</h3>
          <div className="flex items-center space-x-2">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-gray-800 py-1 text-sm flex-grow" 
            />
            <button className="font-medium uppercase border-b border-gray-800 text-sm py-1 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10 ml-10 border-t border-gray-200 pt-8 flex justify-start items-center text-sm">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;