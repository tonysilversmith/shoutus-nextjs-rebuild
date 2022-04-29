import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Tooltip from "@mui/material/Tooltip";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";

const NavDrawer = (props) => {
  const { Routes } = props;
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    //(event) => {
    // if (
    //   event &&
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //     return;
    // }
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <Tooltip title="Main Menu">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer}
          color="inherit"
        >
          <MenuIcon color="primary" />
        </IconButton>
      </Tooltip>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: 250,
            width: "auto",
            backgroundColor: "primary.main",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              p: 1,
              fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Oxygen",
                "Ubuntu",
                "Cantarell",
                "Fira Sans",
                "Droid Sans",
                "Helvetica Neue",
                "sans-serif",
              ].join(","),
              fontWeight: "bold",
            }}
          >
            {/* ShoutUs! <br /> */}
            <Image
              src="/static/images/logos/font_rend.webp.png"
              alt="Tony Supersmith"
              height={60}
              width={250}
              sx={{
                backgroundColor: "primary.main",
              }}
            />
            <Box sx={{ width: "100%", p: "auto auto" }}>&#128516;</Box>
          </Typography>
        </Box>
        <Box
          sx={{
            width: 250,
            pt: 3,
            pb: 3,
            pl: 1,
            pr: 1,
            bg: "background.paper",
          }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {Routes.map((text, index) => (
              <ListItem button key={text} sx={{ height: 35 }}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text} sx={{ height: 35 }}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};
export default NavDrawer;
