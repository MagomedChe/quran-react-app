import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Switcher from "./Switcher";

const HiddenMenu = (props) => {
  return (
    <div className="">
      <Drawer anchor="right" open={props.openMenu} onClose={props.closeMenu}>
        <List>
          <ListItem>
            <ListItemText primary="Смысловой перевод"></ListItemText>
            <ListItemIcon>
              <Switcher />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HiddenMenu;
