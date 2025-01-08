import React from "react";
import { FakeNewsItem } from "../../types/general";
import styled from "styled-components";

interface ArticleProps {
  article: FakeNewsItem;
}

const ArticleCard = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  min-height: 100px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-grow: 1; // Allow articles to grow
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px 0;
`;

const ArticleLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
`;

const Article: React.FC<ArticleProps> = ({ article }) => {
  return (
    <ArticleCard>
      <ArticleImage src={article.urlToImage} alt={article.fakeTitle} />
      <ArticleTitle>{article.fakeTitle}</ArticleTitle>
      <ArticleLink href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </ArticleLink>
    </ArticleCard>
  );
};

export default Article;
