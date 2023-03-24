import React from "react";

function Sura({ sura }) {
  return (
    <div className='w-98 my-4 h-28 flex  border border-cyan-400'>
      {/* <div className='flex h-full justify-between items-center'> */}
      <div className='relative text-3xl flex items-center'>
        <span class='material-symbols-outlined text-7xl text-center absolute'>brightness_empty</span>
        <span className='text-lg text-center w-18'>{sura.id}</span>
      </div>
      <div>
        <div className='w-60 flex items-center'>
          <div className='items-center'>{sura.total_verses} аятов</div>
          <div className='items-center'>{sura.translation}</div>
        </div>
        <div className='flex'>
          <div className='text-3xl flex items-center text-end'>{sura.name}</div>
          <div>{sura.transliteration}</div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Sura;
