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
      <div className='flex w-full flex-wrap flex-row-reverse break-words'>
        {data.verses.map((oneSura) => {
          return (
            <div key={oneSura.id} className='my-7 flex break-keep'>
              <p className='text-7xl break-keep flex'>
                <div className='relative text-3xl flex items-center break-keep'>
                  <span className=' material-symbols-outlined text-7xl text-center absolute'>brightness_empty</span>
                  <span className=' text-lg text-center w-18'>{oneSura.id}</span>
                  {oneSura.text}
                </div>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OneSura;
