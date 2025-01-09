import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import ArticlesEmptyState from "../components/Articles/ArticlesEmptyState";
import fakeNewsStore from "../stores/FakeNewsStore";
import ArticlesLayout from "../components/Articles/ArticlesLayout";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Main = observer(() => {
  return (
    <MainContainer>
      {!fakeNewsStore.fakeNews.length ? (
        <ArticlesEmptyState />
      ) : (
        <ArticlesLayout />
      )}
    </MainContainer>
  );
});

export default Main;
