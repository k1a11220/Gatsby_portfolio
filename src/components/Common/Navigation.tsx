import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {
  darkModeVar,
  disableDarkMode,
  enableDarkMode,
} from "../../hooks/useTheme";

const Navbar = styled.nav`
  position: fixed;
  z-index: 50;
  width: 100vw;
  height: 64px;
  border-bottom: 1px solid transparent;
  background-color: ${(props) => props.theme.bgColor};
  left: 0;
  border-bottom: ${(props) => props.theme.borderColor};
  & a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  @media (max-width: 1400px) {
    width: 92%;
  }
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  & a {
    font-weight: 500;
    color: ${(props) => props.theme.fontColor};
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  overflow-y: hidden;
  max-height: 100%;
  justify-content: space-between;
  transition: 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
    height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    position: absolute;
    top: 64px;
    left: 0;
    max-height: 0;
    border-bottom: ${(props) => props.theme.borderColor};

    &.expanded {
      max-height: 100vh;
      height: auto;
    }
  }
`;

const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: 768px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.125rem;
    background: ${(props) => props.theme.fontColor};
    border-radius: 10px;
    transition: 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
      height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ clicked }) => (clicked ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ clicked }) => (clicked ? "0" : "1")};
      transform: ${({ clicked }) =>
        clicked ? "translateX(30px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ clicked }) => (clicked ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.bgColor};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  font-weight: 400;
  margin-left: 40px;

  @media (max-width: 768px) {
    width: 92%;
    margin: 18px 0px;
  }

  & a {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.fontColor};
  }
  & a:hover {
    transition: all 0.2s ease-in-out;
    color: #086bce;
  }
`;

const Navigation = () => {
  const [clicked, setClicked] = useState(true);
  const click = () => {
    setClicked(!clicked);
  };

  const darkMode = useReactiveVar(darkModeVar);

  return (
    <Navbar>
      <Container>
        <Wrapper>
          <Logo>
            <Link to="/"> Beomsoo-log</Link>
          </Logo>
          <ItemContainer className={clicked ? "" : "expanded"}>
            <ItemWrapper></ItemWrapper>
            <ItemWrapper>
              <Item>
                <Link to="/categories">Categories</Link>
              </Item>
              <Item>
                <Link to="/about">About</Link>
              </Item>
              <Item>
                <Link to="/">Contact</Link>
              </Item>
              <Item>
                <DarkModeSwitch
                  checked={darkMode}
                  onChange={console.log}
                  onClick={darkMode ? disableDarkMode : enableDarkMode}
                  size={24}
                />
              </Item>
            </ItemWrapper>
          </ItemContainer>
          <StyledBurger clicked={!clicked} onClick={click}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </Wrapper>
      </Container>
    </Navbar>
  );
};

export default Navigation;
