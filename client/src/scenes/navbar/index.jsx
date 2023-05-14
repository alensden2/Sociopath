import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout } from "state";

const NavBar = () => {
  return (
    <>
      <div>NavBar</div>
    </>
  );
};

export default NavBar;
