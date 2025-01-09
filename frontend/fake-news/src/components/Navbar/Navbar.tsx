import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "styled-components";
import { Categories } from "../../enums/general";
import ProgressBar from "../UI/ProgressBar";
import fakeNewsStore from "../../stores/FakeNewsStore";

const StyledAppBar = styled(AppBar)`
  background-color: black !important;
  min-height: 40px;
`;

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
`;

const Category = styled.div`
  color: white;
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    color: #bbb;
  }
`;

const Navbar: React.FC = () => {
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <NavbarContainer>
            <LogoContainer>
              <Typography
                variant="h6"
                fontWeight={800}
                color="white"
                onClick={() => fakeNewsStore.getFakeNews(Categories.General)}
              >
                FNN
              </Typography>
            </LogoContainer>
            <CategoriesContainer>
              {Object.values(Categories).map((category) => (
                <Category
                  onClick={() => fakeNewsStore.getFakeNews(category)}
                  key={category}
                >
                  {category}
                </Category>
              ))}
            </CategoriesContainer>
          </NavbarContainer>
        </Toolbar>
      </StyledAppBar>
      <ProgressBar />
    </>
  );
};

export default Navbar;
