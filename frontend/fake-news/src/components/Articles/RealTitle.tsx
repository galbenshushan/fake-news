import { Tooltip } from "@mui/material";
import React from "react";
import styled from "styled-components";

const RealTitleContainer = styled.div`
  font-size: 0.8rem;
  color: #777;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

interface RealTitleProps {
  title: string;
}

const RealTitle: React.FC<RealTitleProps> = ({ title }) => {
  return (
    <Tooltip title={title} placement="top">
      <RealTitleContainer>Real: {title}</RealTitleContainer>
    </Tooltip>
  );
};

export default RealTitle;
