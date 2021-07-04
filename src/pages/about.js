import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import SEO from "components/seo";
import Layout from "layout/layout";
import Markdown from "styles/markdown";
import { rhythm } from "styles/typography";

import Profile from "../images/Profile.png";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `);

  const md = data.allMarkdownRemark.edges[0].node.html;

  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <Img src={Profile} />
        <Container
          dangerouslySetInnerHTML={{ __html: md }}
          rhythm={rhythm}
        ></Container>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0;
  margin-bottom: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 90px;
  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: 60px;
  }
`;

const Container = styled(Markdown).attrs({
  as: "main",
})`
  width: var(--post-width);
  margin-left: 60px;
  margin-top: 80px;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
    margin-left: 0;
    text-align: center;
  }

  p {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      text-align: center;
    }
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
`;

export default About;
