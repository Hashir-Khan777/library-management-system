import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, onClick }) => {
  return (
    <Button sx={{ boxShadow: 0 }} variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
