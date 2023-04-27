import Sura from "./Sura";
import { useGetListSurasQuery } from "../../redux";
import Preloader from "../Preloader/Preloader";

function Suras(props) {
  const { data, isLoading } = useGetListSurasQuery();
  if (isLoading)
    return (
      <div>
        <Preloader />
      </div>
    );

  return (
    <>
      <main className='w-full mx-auto flex flex-wrap justify-between'>
        {data.map((sura) => {
          return <Sura sura={sura} key={sura.id} />;
        })}
      </main>
      <footer>Футер</footer>
    </>
  );
}

export default Suras;
