function TotalAndTranslationSuras({ sura }) {
  return (
    <div className='flex justify-between items-center mb-2'>
      <div className=''>{sura.total_verses} аятов</div>
      <div className=''>{sura.translation}</div>
    </div>
  );
}

export default TotalAndTranslationSuras;
