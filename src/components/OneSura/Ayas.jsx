import React from "react";

const Ayas = ({ oneSura }) => {
  return (
    <div
      key={oneSura.id}
      className="my-7 pb-7 relative text-3xl inline-flex items-center break-keep w-full"
    >
      <span
        dir="rtl"
        className="relative text-3xl inline items-center leading-loose  w-full"
      >
        {oneSura.text}
        <div className="relative text-2xl inline-flex items-center">
          <span className=" material-symbols-outlined text-7xl text-center absolute">
            brightness_empty
          </span>
          <span className="inline text-lg text-center w-18">{oneSura.id}</span>
        </div>
      </span>
    </div>
  );
};

export default Ayas;
