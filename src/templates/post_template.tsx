import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Template from "components/Common/Template";
import PostHead, { PostHeadProps } from "components/Post/PostHead";
import PostContent from "components/Post/PostContent";
import CommentWidget from "components/Post/CommentWidget";
import Share from "components/Post/Share";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "hooks/useTheme";
import styled from "styled-components";

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: PostHeadProps & {
              summary: string;
              title: string;
              path: string;
            };
          };
        }
      ];
    };
  };
}

const Comment = styled(CommentWidget)`
  theme: "github-dark";
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, frontmatter },
  } = edges[0];
  const theme = useReactiveVar(darkModeVar);
  let CommentTheme = theme ? "github-dark" : "github-light";

  return (
    <Template
      title={`[${frontmatter.categories}] ` + frontmatter.title + "- B-log"}
      description={frontmatter.summary}
      url=""
      image=""
    >
      <PostHead {...frontmatter} />
      <PostContent html={html} />
      <Share nextProject={frontmatter.path} prevProject="ageasda" />
      <Comment repo="k1a11220/blog" theme={CommentTheme} />
    </Template>
  );
};
export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                fluid(fit: INSIDE, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
