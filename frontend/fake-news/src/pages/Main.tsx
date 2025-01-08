import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import fakeNewsStore from "../stores/FakeNewsStore"; // Adjust to your actual store path
import Article from "../components/Articles/Article";

// Define styled components for layout
const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const BigArticleContainer = styled.div`
  flex: 2 1 60%; // Large article takes up 60% of the space
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
`;

const SideArticlesContainer = styled.div`
  display: flex;
  flex-direction: column; // Arrange the side articles vertically in a column
  gap: 20px;
  flex: 1 1 30%; // Three side articles take up 30% of the space
`;

const BottomArticlesContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 20px;
  justify-content: space-between;
`;

const Main = observer(() => {
  const articles = fakeNewsStore.fakeNews;

  return (
    <MainContainer>
      {articles.length > 0 && (
        <BigArticleContainer>
          <Article article={articles[0]} />
        </BigArticleContainer>
      )}

      <SideArticlesContainer>
        {articles.slice(1, 4).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </SideArticlesContainer>

      <BottomArticlesContainer>
        {articles.slice(4, 10).map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </BottomArticlesContainer>
    </MainContainer>
  );
});

export default Main;
