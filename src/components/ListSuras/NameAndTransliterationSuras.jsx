function NameAndTransliterationSuras({ sura }) {
  return (
    <div className='text-cyan-500 text-xl flex justify-between items-center'>
      <div className='text-3xl flex text-end'>{sura.name}</div>
      <div>{sura.transliteration}</div>
    </div>
  );
}

export default NameAndTransliterationSuras;
