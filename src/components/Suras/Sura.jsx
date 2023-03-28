import React from "react";

function Sura({ sura }) {
  return (
    <div className='text-gray-600 font-medium border-gray-300 w-98 my-4 h-28 flex rounded-xl border'>
      <div className='relative text-3xl flex items-center'>
        <span class=' material-symbols-outlined text-7xl text-center absolute'>brightness_empty</span>
        <span className=' text-lg text-center w-18'>{sura.id}</span>
      </div>
      <div className='w-full mx-8  my-auto items-center'>
        <div className='flex  justify-between items-center mb-2'>
          <div className=''>{sura.total_verses} аятов</div>
          <div className=''>{sura.translation}</div>
        </div>
        <div className='text-cyan-500 text-xl flex justify-between items-center'>
          <div className='text-3xl flex text-end'>{sura.name}</div>
          <div>{sura.transliteration}</div>
        </div>
      </div>
    </div>
  );
}

export default Sura;
