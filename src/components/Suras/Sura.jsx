import React from "react";

function Sura({ sura }) {
  return (
    <div className='w-98 my-4 h-28 flex  border border-cyan-400'>
      <div className='flex h-full'>
        <div className='relative text-3xl w-24 flex items-center border border-red-500'>
          <span class=' m-auto  material-symbols-outlined inline-flex items-center text-7xl absolute border border-amber-400'>
            brightness_empty
          </span>
          {/* <span className='w-11 m-auto border border-amber-400'>{sura.id}</span> */}
        </div>
        <div className='w-64 p-2 items-center'>
          <div className='items-center'>{sura.total_verses} аятов</div>
          <div className='items-center'>{sura.translation}</div>
        </div>
        <div className='text-3xl flex items-center'>{sura.name}</div>
      </div>
    </div>
  );
}

export default Sura;
