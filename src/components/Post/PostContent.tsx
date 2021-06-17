import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

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
    margin-bottom: 22px; //18px
  }

  h1 {
    font-size: 3rem; //48px
  }

  h2 {
    font-size: 1.625rem; //26px
    padding: 1rem 0 1rem 0;
    margin-top: 40px;
  }

  h3 {
    font-size: 1.375rem; //22px
    padding: 1rem 0 1rem 0;
  }

  strong {
    color: #1d1d1d;
    font-weight: 600;
  }

  h1,
  h2,
  h3 {
    color: #1d1d1d;
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
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // Adjust List Element Style
  li {
    margin-bottom: 4px;
  }

  li p,
  strong {
    margin: 0;
  }

  ol,
  ul {
    margin-left: 20px;
    margin-bottom: 18px;
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
    width: 90vw;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
      margin-top: 20px;
      padding: 0.75rem 0 0.75rem 0;
    }

    h3 {
      font-size: 18px;
      padding: 0.75rem 0 0.75rem 0;
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
