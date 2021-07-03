import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PostHeadInfo, { PostHeadInfoProps } from "components/Post/PostHeadInfo";
import Img, { FluidObject } from "gatsby-image";

type GatsbyImgProps = {
  fluid: FluidObject;
  alt: string;
  className?: string;
};

export interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 92%;
    align-self: center;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => <Img {...props} />)`
  width: 700px;
  height: 400px;
  object-fit: cover;
  margin: 0 auto;
  margin-bottom: 60px;
  object-position: center center;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
    margin-bottom: 40px;
  }
`;

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail: {
    childImageSharp: { fluid },
  },
}) {
  return (
    <PostHeadWrapper>
      <PostHeadInfo title={title} date={date} categories={categories} />
      <BackgroundImage fluid={fluid} alt="thumbnail" />
    </PostHeadWrapper>
  );
};

export default PostHead;
