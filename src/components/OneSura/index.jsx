import { useGetOneSuraQuery } from "../../redux";
import { useParams } from "react-router-dom";
import HiddenMenu from "./HiddenMenu";
import { useState } from "react";
import IconSetting from "./IconSetting";
import Ayas from "./Ayas";
import TotalNameTranslation from "./TotalNameTranslation";
function OneSura(props) {
  const id = parseInt(useParams().id);
  const { data = [], isLoading } = useGetOneSuraQuery(id);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  if (isLoading) return <h1>Loading sura ...</h1>;

  return (
    <>
      <IconSetting setHiddenMenu={setHiddenMenu} />
      <TotalNameTranslation data={data} />
      <div className="break-keep justify-items-end w-full flex-wrap flex-row-reverse flex">
        {data.verses.map((oneSura) => {
          return <Ayas oneSura={oneSura} key={oneSura.id} />;
        })}
      </div>
      <HiddenMenu
        openMenu={hiddenMenu}
        closeMenu={() => setHiddenMenu(false)}
      />
    </>
  );
}

export default OneSura;
