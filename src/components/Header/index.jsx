import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="w-full flex my-8 justify-between text-cyan-500 text-6xl">
      <NavLink to={"/"}>
        <div className="">القرآن</div>
      </NavLink>
    </header>
  );
}

export default Header;
