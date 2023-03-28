import React from "react";
import { NavLink } from "react-router-dom";
import NameAndTransliterationSuras from "./NameAndTransliterationSuras";
import NumberSuras from "./NumberSuras";
import TotalAndTranslationSuras from "./TotalAndTranslationSuras";

function Sura({ sura }) {
  return (
    <NavLink to={`${sura.id}`}>
      <div className='text-gray-600 font-medium border-gray-300 w-98 my-4 h-28 flex rounded-xl border'>
        <NumberSuras sura={sura} />
        <div className='w-full mx-8  my-auto items-center'>
          <TotalAndTranslationSuras sura={sura} />
          <NameAndTransliterationSuras sura={sura} />
        </div>
      </div>
    </NavLink>
  );
}

export default Sura;
