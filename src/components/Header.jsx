import React from "react";
import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#079a6b",
});
const Header = () => {
  return (
    <div position="absolute">
      <StyledToolbar>
        <Typography>Hello World</Typography>
      </StyledToolbar>
    </div>
  );
};

export default Header;
