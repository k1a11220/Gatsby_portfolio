import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img, { FluidObject } from "gatsby-image";

interface PostItemProps {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
}
const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #ffffff;
  transition: 0.3s box-shadow;
  cursor: pointer;
  transition: all 0.2s ease-in;
  height: 380px;

  &:hover {
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);

    transform: scale(1.02);
  }
`;

const ThumbnailImage = styled(Img)`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
  background-color: #fafafa;
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  height: 380px;
`;
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1d;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.7;
  color: #6e6e73;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const CategoryItem = styled.div`
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  color: #086bce;
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  thumbnail: {
    childImageSharp: { fluid },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage fluid={fluid} alt="Post Item Image" />

      <PostItemContent>
        <div>
          <Category>
            {categories.map((item) => (
              <CategoryItem key={item}>{item}</CategoryItem>
            ))}
          </Category>
          <Title>{title}</Title>
        </div>
        <Date>{date}</Date>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
