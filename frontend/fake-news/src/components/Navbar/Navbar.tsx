import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background-color: black !important;
  min-height: 40px;
`;

const StyledToolbar = styled(Toolbar)`
  min-height: 40px;
`;

const StyledTypography = styled(Typography)`
  font-size: 1rem;
  font-weight: 800;
`;

const Navbar: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6">FNN</StyledTypography>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
