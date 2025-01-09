import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import fakeNewsStore from "../../stores/FakeNewsStore";
import Banner from "../UI/Banner";
import ArticleCard from "./ArticleCard";

const TopSection = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 20px;
  padding: 0 10px;
  width: 100%;
`;

const ArticlesLayout = observer(() => {
  return (
    <>
      <TopSection>
        {fakeNewsStore.fakeNews.slice(0, 2).map((article) => (
          <ArticleCard article={article} key={article.realTitle} />
        ))}
      </TopSection>
      <Banner text="Breaking News" />
      <BottomSection>
        {fakeNewsStore.fakeNews.slice(2).map((article) => (
          <ArticleCard article={article} key={article.realTitle} />
        ))}
      </BottomSection>
    </>
  );
});

export default ArticlesLayout;
