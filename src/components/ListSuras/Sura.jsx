import React from "react";
import { NavLink } from "react-router-dom";
import NameAndTransliterationSuras from "./NameAndTransliterationSuras";
import NumberSuras from "./NumberSuras";
import TotalAndTranslationSuras from "./TotalAndTranslationSuras";

function Sura({ sura }) {
  return (
    <>
      <NavLink
        className='w-full md:w-w48 lg:w-130 mx-1 text-gray-400 font-medium h-28 flex border-b border-gray-300 md:border md:rounded-xl md:mb-3'
        to={`${sura.id}`}
      >
        <NumberSuras sura={sura} />
        <div className='w-full lg:w-130 ml-5 mr-3  my-auto items-center'>
          <TotalAndTranslationSuras sura={sura} />
          <NameAndTransliterationSuras sura={sura} />
        </div>
      </NavLink>
    </>
  );
}

export default Sura;
