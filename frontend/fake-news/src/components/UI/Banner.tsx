import React from "react";
import styled from "styled-components";

const BreakingNewsBanner = styled.div`
  background-color: rgb(239, 12, 12);
  padding: 10px 5px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  height:20px
`;

interface BannerProps {
  text?: string;
}

const Banner: React.FC<BannerProps> = ({ text = "" }) => {
  return <BreakingNewsBanner>{text}</BreakingNewsBanner>;
};

export default Banner;
