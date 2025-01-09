import React from "react";
import styled from "styled-components";
import Banner from "../UI/Banner";
import InnerSkeletonCard from "./InnerSkeletonCard";

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const BottomSkeleton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding: 10px 0;
`;

const SkeletonCardBottom = styled.div`
  background-color: #ddd;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const SkeletonCardImageBottom = styled.div`
  background-color: #ccc;
  height: 150px;
  border-radius: 8px;
  width: 100%;
`;

const SkeletonCard = styled.div`
  background-color: #ddd;
  padding: 10px;
  border-radius: 8px;
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
`;

const SkeletonImage = styled.div`
  background-color: #ccc;
  height: 150px;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ArticlesEmptyState = () => {
  return (
    <>
      <TopSection>
        {[...Array(2)].map((_, index) => (
          <SkeletonCard key={index}>
            <SkeletonImage />
            <InnerSkeletonCard />
          </SkeletonCard>
        ))}
      </TopSection>
      <Banner text="  " />
      <BottomSkeleton>
        {[...Array(4)].map((_, index) => (
          <SkeletonCardBottom key={index}>
            <SkeletonCardImageBottom />
            <InnerSkeletonCard />
          </SkeletonCardBottom>
        ))}
      </BottomSkeleton>
    </>
  );
};

export default ArticlesEmptyState;
