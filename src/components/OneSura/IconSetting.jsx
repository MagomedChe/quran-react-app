import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";

const IconSetting = (props) => {
  return (
    <div className="absolute top-0 right-0 text-cyan-500">
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => props.setHiddenMenu(true)}
      >
        <SettingsIcon />
      </IconButton>
    </div>
  );
};

export default IconSetting;
