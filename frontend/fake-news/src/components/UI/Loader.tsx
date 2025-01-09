import React from "react";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: rgb(239, 12, 12);
  }
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <StyledCircularProgress />
    </LoaderContainer>
  );
};

export default Loader;
