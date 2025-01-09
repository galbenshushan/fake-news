import React from "react";
import styled from "styled-components";
import { formatDate } from "../../utils/Dates";
import { FakeNewsItem } from "../../types/general";
import { Tooltip } from "@mui/material";
import RealTitle from "./RealTitle";

const CommonCardContainer = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
  height: 400px;
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 250px;
  min-height: 250px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-position: center;
  margin-bottom: 15px;
`;

const CardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  padding: 0;
  margin: 0;
`;

const ArticleMeta = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 10px;
`;

const ArticleCardData = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const LinkButton = styled.a`
  width: fit-content;
  text-transform: none;
  font-weight: 800;
  padding: 0;
  color: rgb(239, 12, 12);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

interface ArticleCardProps {
  article: FakeNewsItem;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <CommonCardContainer>
      <CardImage
        src={article.urlToImage}
        alt={article.fakeTitle}
        loading="lazy"
      />
      <ArticleCardData>
        <RealTitle title={article.realTitle} />
        <CardTitle>{article.fakeTitle}</CardTitle>
        <Tooltip title={article.url} placement="top">
          <LinkButton href={article.url} target="_blank">
            {article.source}
          </LinkButton>
        </Tooltip>
        <CardMeta>
          <ArticleMeta>{formatDate(article.date)}</ArticleMeta>
          <ArticleMeta>{article.category}</ArticleMeta>
        </CardMeta>
      </ArticleCardData>
    </CommonCardContainer>
  );
};

export default ArticleCard;
