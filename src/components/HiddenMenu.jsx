import React from "react";
import Drawer from "@mui/material/Drawer";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const HiddenMenu = (props) => {
  return (
    <Drawer anchor="right" open={props.openMenu} onClose={props.closeMenu}>
      <List>
        <ListItem>
          <ListItemText primary="Смысловой перевод"></ListItemText>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default HiddenMenu;
