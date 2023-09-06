import { NavLink } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import HiddenMenu from "./HiddenMenu";
import { useState } from "react";

function Header(props) {
  const [isOpenMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-full flex my-8 justify-between text-cyan-500 text-6xl">
      <NavLink to={"/"}>
        <div className="">القرآن</div>
      </NavLink>
      <div className="flex">
        <div className="ml-8">
          <span className="material-symbols-outlined text-4xl">search</span>
        </div>
        <div className="ml-8">
          <span className="material-symbols-outlined text-4xl">headphones</span>
        </div>
        <div>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SettingsIcon />
          </IconButton>

          <HiddenMenu
            openMenu={isOpenMenu}
            closeMenu={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
