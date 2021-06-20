import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface PostHeadInfoProps {
  title: string;
  date: string;
  categories: string[];
}

const SCategories = styled.div`
  color: #086bce;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1.125rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const SDate = styled(SCategories)`
  color: #a1a1a1;
  font-weight: 700;
  margin-top: 1.125rem;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

const Hr = styled.hr`
  margin-top: 60px;
  color: #4e5968;
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 0;
  color: #ffffff;
  position: relative;
  top: 64px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 0;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.fontColor};

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
}) {
  return (
    <PostHeadInfoWrapper>
      <SCategories>{categories.join(" / ")}</SCategories>
      <Title>{title}</Title>
      <SDate>업데이트 : {date}</SDate>
      <Hr />
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
