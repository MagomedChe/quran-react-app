import { useGetOneSuraQuery } from "../../redux";
import { useParams } from "react-router-dom";

function OneSura(props) {
  const id = parseInt(useParams().id);
  const { data = [], isLoading } = useGetOneSuraQuery(id);
  if (isLoading) return <h1>Loading sura ...</h1>;
  console.log(data);
  return (
    <>
      <div className="flex justify-between py-9">
        <div className="text-xl">
          {data.total_verses <= 4
            ? `${data.total_verses} аята`
            : `${data.total_verses} аятов`}
        </div>
        <div className="text-cyan-500 text-3xl">{data.name}</div>
        <div className="text-xl">Сура "{data.translation}"</div>
      </div>
      <div className="break-keep grid justify-items-end w-full flex-wrap flex-row-reverse">
        {data.verses.map((oneSura) => {
          return (
            <div
              key={oneSura.id}
              className="my-7 pb-7 relative text-3xl inline-flex items-center break-keep w-full border-b-2"
            >
              <span
                dir="rtl"
                className="relative text-3xl inline items-center leading-loose  w-full"
              >
                {oneSura.text}
                <div className="relative text-2xl inline-flex items-center">
                  <span className=" material-symbols-outlined text-7xl text-center absolute">
                    brightness_empty
                  </span>
                  <span className="inline text-lg text-center w-18">
                    {oneSura.id}
                  </span>
                </div>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default OneSura;
