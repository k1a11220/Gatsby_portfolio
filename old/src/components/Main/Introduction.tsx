import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ProfileImageProps } from "components/Main/ProfileImage";

type IntroductionProps = ProfileImageProps;

const Background = styled.div`
  align-self: center;
  background-color: ${(props) => props.theme.bgColor};
  color: #ffffff;
  margin-top: 40px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  top: 54px;
  width: 1200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 1400px) {
    width: 92%;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    // <Background>
    <Wrapper>
      {/* <ProfileImage profileImage={profileImage} /> */}
      <div>
        {/* <SubTitle>안녕하세요</SubTitle> */}
        <Title>
          I'm Beomsoo Son, an Engineer and Designer based in Suwon, South Korea
          focused on Industrial Design engineering and Digital product design.
        </Title>
      </div>
    </Wrapper>
    // </Background>
  );
};

export default Introduction;
