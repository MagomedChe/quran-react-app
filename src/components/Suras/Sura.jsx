import React from "react";

function Sura({ sura }) {
  return (
    <div className=' relative w-98 my-4 h-28 flex justify-between border border-cyan-400 p-3.5 '>
      <div className='flex h-full'>
        <div className='text-3xl flex items-center'>
          <span class='material-symbols-outlined flex items-center text-5xl absolute top-4 left-4'>
            brightness_empty
          </span>
          {sura.id}
        </div>
        <div className='w-64 p-2 items-center'>
          <div className='items-center'>{sura.total_verses} аятов</div>
          <div className='items-center'>{sura.translation}</div>
        </div>
      </div>
      <div className='text-3xl flex items-center'>{sura.name}</div>
    </div>
  );
}

export default Sura;
