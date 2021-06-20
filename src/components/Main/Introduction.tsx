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
  width: 92%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 300px;
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
  font-size: 32px;
  font-weight: 700;

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
        {/* <Title>좋은 제품을 만들기 위한 고민을 적고 있습니다.</Title> */}
      </div>
    </Wrapper>
    // </Background>
  );
};

export default Introduction;
