import Sura from "./Sura";
import { useGetListSurasQuery } from "../../redux";

function Suras(props) {
  const { data, isLoading } = useGetListSurasQuery();
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <main className='container lg flex flex-wrap justify-between'>
        {data.map((sura) => {
          return <Sura sura={sura} key={sura.id} />;
        })}
      </main>
      <footer>Футер</footer>
    </>
  );
}

export default Suras;
