import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import queryString, { ParsedQuery } from "query-string";

import Template from "components/Common/Template";
import Introduction from "components/Main/Introduction";
import PostList, { PostType } from "components/Main/PostList";
import { ProfileImageProps } from "components/Main/ProfileImage";

const Title = styled.p`
  width: 1200px;
  margin: 100px auto 0;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 1400px) {
    width: 92%;
    margin: 50px auto 0;
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.indexColor};
`;

interface IndexPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      childImageSharp: {
        fluid: ProfileImageProps["profileImage"];
      };
    };
  };
}

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { fluid },
    },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search);
  const selectedCategory: string =
    typeof parsed.category !== "string" || !parsed.category
      ? "All"
      : parsed.category;
  return (
    <Template title="Beomsoo-log" description="desc" url="url" image="img">
      <Container>
        <Introduction profileImage={fluid} />
        <Title>최근 게시글</Title>
        <PostList selectedCategory={selectedCategory} posts={edges} />
      </Container>
    </Template>
  );
};
export default IndexPage;
export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 768
                  maxHeight: 200
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        fluid(maxWidth: 120, maxHeight: 120, fit: INSIDE, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
