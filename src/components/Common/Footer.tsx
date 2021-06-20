import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Container = styled.footer`
  width: 100vw;
  height: 148px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.subBgColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 1400px) {
    width: 92%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Cta = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.btnBgColor};
  padding: 8px 24px 8px 24px;
  border-radius: 40px;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.btnTextColor};
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin-left: 16px;
  }
`;

const Icon = styled(FontAwesomeIcon)``;

const IconContainer = styled.a`
  &:hover {
    & > svg {
      color: green;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <a
          href="mailto:beskar.son@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Cta>beskar.son@gmail.com</Cta>
        </a>
        <IconWrapper>
          <IconContainer
            href="https://www.beomsoo.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="font-icon" icon={faBehance} size="lg" />
          </IconContainer>
          <Icon icon={faInstagram} size="lg" />
          <Icon icon={faGithub} size="lg" />
          <Icon icon={faLinkedinIn} size="lg" />
        </IconWrapper>
      </Wrapper>
    </Container>
  );
};

export default Footer;
