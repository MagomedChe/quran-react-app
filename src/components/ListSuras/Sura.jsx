import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NameAndTransliterationSuras from "./NameAndTransliterationSuras";
import NumberSuras from "./NumberSuras";
import TotalAndTranslationSuras from "./TotalAndTranslationSuras";

function Sura({ sura }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <NavLink
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className='md:mb-3 w-full md:w-w48 lg:w-w48 xl:w-[32%] mx-1 hover:shadow-3xl  hover:border-0  text-gray-500 font-medium h-28 flex border-b  border-gray-300 md:border md:rounded-xl '
        to={`${sura.id}`}
      >
        <NumberSuras sura={sura} hover={hover} />
        <div className='w-full lg:w-130 ml-5 mr-3 my-auto items-center'>
          <TotalAndTranslationSuras sura={sura} />
          <NameAndTransliterationSuras sura={sura} />
        </div>
      </NavLink>
    </>
  );
}

export default Sura;
