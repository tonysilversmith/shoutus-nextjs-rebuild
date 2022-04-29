import React from "react";

// const [state, setState] = React.useState({
//   top: false,
//   left: false,
//   bottom: false,
//   right: false,
// });
let Routes = ["Services", "About", "Contact"];
const toggleDrawer = (anchor, open) => (event) => {
  if (
    event &&
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};
const DrawerContext = React.createContext();

export default DrawerContext;
