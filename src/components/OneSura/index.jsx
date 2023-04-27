import { useGetOneSuraQuery } from "../../redux";
import { useParams } from "react-router-dom";

function OneSura(props) {
  const id = parseInt(useParams().id);
  const { data = [], isLoading } = useGetOneSuraQuery(id);
  if (isLoading) return <h1>Loading sura ...</h1>;
  console.log(id);
  return (
    <>
      <div>
        <div>{data.name}</div>
        <div>Сура "{data.translation}"</div>
      </div>
      <div className='break-keep grid justify-items-end w-full flex-wrap flex-row-reverse'>
        {data.verses.map((oneSura) => {
          return (
            <div key={oneSura.id} className='my-7 relative text-3xl flex items-center break-keep'>
              <p className='break-all text-center text-3xl leading-8 align-middle'>
                {oneSura.text}
                <span className=' material-symbols-outlined text-7xl text-center w-18'>brightness_empty</span>
                {oneSura.id}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OneSura;
