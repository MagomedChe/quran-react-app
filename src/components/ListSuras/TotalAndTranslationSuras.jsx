function TotalAndTranslationSuras({ sura }) {
  return (
    <div className='flex justify-between items-center mb-2 '>
      <div>{sura.total_verses} аятов</div>
      <div>{sura.translation}</div>
    </div>
  );
}

export default TotalAndTranslationSuras;
