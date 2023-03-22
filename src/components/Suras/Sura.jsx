import React from "react";

function Sura({ sura }) {
  return (
    <div className='w-96 h-28 flex justify-between border border-slate-300 p-3.5'>
      <div className='flex'>
        <div className=''>{sura.id}</div>
        <div className='w-44 p-2'>
          <div className=''>{sura.total_verses} аятов</div>
          <div className=''>{sura.translation}</div>
        </div>
      </div>
      <div className='text-3xl'>{sura.name}</div>
    </div>
  );
}

export default Sura;
