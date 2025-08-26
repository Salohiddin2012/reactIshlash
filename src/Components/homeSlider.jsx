import React from "react";
import rec from "../assets/rec.png";
import ren from "../assets/ren.png";

const HomeSlider = () => {
  return (
    <div className="bg-[#fdfbf9] px-6 md:px-20 py-12 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-[350px]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-500 mt-4 mb-6">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="bg-yellow-700 text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-800 transition">
            Explore More
          </button>
        </div>

        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
            <div className="min-w-[300px] md:min-w-[400px] bg-white shadow rounded-lg overflow-hidden">
              <img
                src={rec}
                alt="room"
                className="h-72 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">01 — Bed Room</p>
                <h3 className="text-lg font-semibold">Inner Peace</h3>
                <button className="mt-2 text-yellow-700 font-bold">
                  →
                </button>
              </div>
            </div>

            <div className="min-w-[300px] md:min-w-[400px] bg-white shadow rounded-lg overflow-hidden">
              <img
                src={ren}
                alt="room"
                className="h-72 w-full object-cover"
              />
  
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <span className="w-3 h-3 bg-yellow-700 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
