import React from "react";
const TotalAndTranslationSuras = React.forwardRef(({ sura }, ref) => {
  return (
    <div ref={ref} className="flex justify-between items-center mb-2 ">
      <div>
        {sura.total_verses <= 4
          ? `${sura.total_verses} аята`
          : `${sura.total_verses} аятов`}
      </div>
      <div>{sura.translation}</div>
    </div>
  );
});

export default TotalAndTranslationSuras;
