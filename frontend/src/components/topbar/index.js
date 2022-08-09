import React from "react";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      open={open}
      style={{
        backgroundColor: "#fff",
        boxShadow: 0,
        color: "#000",
      }}
      elevation={0}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <GiHamburgerMenu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Library Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
