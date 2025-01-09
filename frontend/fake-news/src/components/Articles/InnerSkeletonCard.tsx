import React from "react";
import styled from "styled-components";

const SkeletonCardDateBottom = styled.div`
  background-color: #ccc;
  height: 15px;
  border-radius: 4px;
  width: 50%;
`;

const SkeletonText = styled.div`
  background-color: #ccc;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const InnerSkeletonCard = () => {
  return (
    <>
      <SkeletonText />
      <SkeletonText />
      <SkeletonCardDateBottom />
    </>
  );
};

export default InnerSkeletonCard;
