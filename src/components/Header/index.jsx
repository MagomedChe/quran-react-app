function Header(props) {
  return (
    <div className='flex my-8 justify-between text-cyan-500 text-6xl'>
      <div className=''>القرآن</div>
      <div className='flex'>
        <div className='ml-8'>
          <span className='material-symbols-outlined text-4xl'>search</span>
        </div>
        <div className='ml-8'>
          <span className='material-symbols-outlined text-4xl'>headphones</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
