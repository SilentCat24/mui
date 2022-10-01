import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  padding: "30 0px",
  backgroundColor: "#20a37a",
});
const NavBar = () => {
  return (
    <AppBar positon="sticky">
      <StyledToolbar>
        <Typography>Nav Bar</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
