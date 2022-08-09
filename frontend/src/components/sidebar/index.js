import React, { useEffect, useState } from "react";
import { BiLibrary } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { MdOutlineMenuOpen } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const routes = [
  {
    path: "/",
    name: "Students",
    icon: <FiUsers size={20} />,
  },
  {
    path: "/books",
    name: "Books",
    icon: <BiLibrary size={20} />,
  },
];

const Sidebar = ({ open, handleDrawerClose }) => {
  const [activeMenu, setActiveMenu] = useState();

  useEffect(() => {
    const path = window.location.pathname;
    let activeMenu = routes.find((menu) => menu.path === path);
    if (activeMenu) {
      setActiveMenu(activeMenu);
    }
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <MdOutlineMenuOpen />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            onClick={() => setActiveMenu(route)}
          >
            <ListItem
              style={{
                color: "#000",
                backgroundColor: activeMenu === route ? "#f5f5f5" : "",
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
