import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="w-full flex my-8 justify-between text-cyan-500 text-6xl">
      <NavLink to={"/"}>
        <div className="casdf">القرآن</div>
      </NavLink>
      <div className="flex">
        <div className="ml-8">
          <span className="material-symbols-outlined text-4xl">search</span>
        </div>
        <div className="ml-8">
          <span className="material-symbols-outlined text-4xl">headphones</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
