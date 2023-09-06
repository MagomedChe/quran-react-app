import React from "react";

const TotalNameTranslation = ({ data }) => {
  return (
    <div className="flex justify-between py-9 text-gray-500 items-end">
      <div className="text-xl">
        {data.total_verses <= 4
          ? `${data.total_verses} аята`
          : `${data.total_verses} аятов`}
      </div>
      <div className="text-cyan-500 text-6xl">{data.name}</div>
      <div className="text-xl">Сура "{data.translation}"</div>
    </div>
  );
};

export default TotalNameTranslation;
