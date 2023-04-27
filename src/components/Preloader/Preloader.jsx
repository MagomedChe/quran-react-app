function Preloader() {
  const preloader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return preloader.map((index) => {
    return (
      <div key={index} class='shadow rounded-md p-4 max-w-sm w-full mx-auto flex flex-wrap'>
        <div class='animate-pulse flex space-x-4'>
          <div class='rounded-full bg-slate-200 h-12 w-12 m-auto'></div>
          <div class='flex-1 space-y-3 py-1'>
            <div class='space-y-3'>
              <div class='grid  gap-4 col-start-1 col-end-3 '>
                <div class='h-5 bg-slate-200 rounded col-span-1'></div>
                <div class='h-5 bg-slate-200 rounded col-span-1'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Preloader;
