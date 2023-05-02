function NameAndTransliterationSuras({ sura }) {
  return (
    <div className=' items-center text-xl flex justify-between'>
      <div className='text-3xl flex text-end'>{sura.name}</div>
      <div>{sura.transliteration}</div>
    </div>
  );
}

export default NameAndTransliterationSuras;
