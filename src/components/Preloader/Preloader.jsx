import React from "react";

const Preloader = (props) => {
  const preload = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  return (
    <div className='w-full mx-auto flex flex-wrap justify-between animate-pulse'>
      {preload.map((index) => {
        return (
          <div
            key={index}
            className='md:mb-3 w-full md:w-w48 lg:w-w48 xl:w-[32%] mx-1 shadow-3xl h-28 flex border-b border-gray-300 md:rounded-xl px-5 my-auto items-center justify-around'
          >
            <div className='rounded-full bg-slate-200 h-12 w-12'></div>
            <div className='w-[80%] my-auto items-center'>
              <div className='flex justify-between items-center mb-2 h-5 bg-slate-200 md:rounded-xl'></div>
              <div className='flex justify-between items-center h-5 bg-slate-200 md:rounded-xl'></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Preloader;
