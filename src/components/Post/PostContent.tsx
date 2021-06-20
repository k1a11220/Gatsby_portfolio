import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  word-break: break-all;

  // Markdown Style
  line-height: 1.8125;
  letter-spacing: -0.02rem;
  /* word-break: keep-all; */
  font-weight: 300;

  * {
    font-size: 1.125rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  // Adjust Heading Element Style

  p {
    margin-bottom: 32px; //18px
  }

  h1 {
    font-size: 3rem; //48px
  }

  h2 {
    font-size: 1.625rem; //26px
    margin: 36px 0 32px 0;
  }

  h3 {
    font-size: 1.375rem; //22px
    margin: 20px 0px 20px 0px;
  }

  strong {
    color: ${(props) => props.theme.fontColor};
    font-weight: 600;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.fontColor};
    font-weight: 600;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
    padding-top: 0;
  }

  /* * + h1,
  * + h2,
  * + h3 {
    padding-top: 0;
  } */

  & > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  & > h3:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid ${(props) => props.theme.fontColor};
    font-weight: 800;
  }

  // Adjust List Element Style

  li p,
  strong {
    margin: 0;
  }

  ol,
  ul {
    margin-left: 20px;
    margin-bottom: 32px;
  }

  // Adjust Horizontal Rule style
  hr {
    margin: 22px 0 40px;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  pre[class*="language-"] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 92%;
    line-height: 1.6;
    font-size: 14px;

    p {
      margin-bottom: 20px;
    }

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
      margin: 28px 0 12px 0px;
    }

    h3 {
      font-size: 18px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
