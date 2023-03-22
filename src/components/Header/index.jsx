function Header(props) {
  return (
    <div className='flex my-8 justify-between'>
      <div className='ml-8'>Коран</div>
      <div className='flex'>
        <div className='ml-8'>
          <span class='material-symbols-outlined'>search</span>
        </div>
        <div className='ml-8'>
          <span class='material-symbols-outlined'>headphones</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
