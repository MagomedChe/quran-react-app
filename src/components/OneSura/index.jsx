import { useGetOneSuraQuery } from "../../redux";
import { useParams } from "react-router-dom";
import Sura from "../ListSuras/Sura";

function OneSura(props) {
  const id = parseInt(useParams().id);
  const { data = [], isLoading } = useGetOneSuraQuery(id);
  if (isLoading) return <h1>Loading sura ...</h1>;
  console.log(id);
  return (
    <>
      <div>{data.name}</div>
      {data.verses.map((oneSura) => {
        return <div key={oneSura.id}>{oneSura.text}</div>;
      })}
    </>
  );
}

export default OneSura;
