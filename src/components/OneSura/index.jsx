import { useGetOneSuraQuery } from "../../redux";
import { useParams } from "react-router-dom";
import Sura from "../ListSuras/Sura";

function OneSura(props) {
  const id = useParams().id;
  const { data = [], isLoading } = useGetOneSuraQuery();
  if (isLoading) return <h1>Loading sura ...</h1>;
  console.log({ data });
  return (
    <>
      {/* {data.verses.map((oneSura) => {
        return <div key={oneSura.id}>{oneSura.id}</div>;
      })} */}
    </>
  );
}

export default OneSura;
