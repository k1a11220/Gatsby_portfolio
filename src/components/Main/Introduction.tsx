import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import ProfileImage, { ProfileImageProps } from "components/Main/ProfileImage";

type IntroductionProps = ProfileImageProps;

const Background = styled.div`
  width: 1200px;
  align-self: center;
  background-color: #ffffff;
  color: #ffffff;
  margin-top: 40px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 440px;
  padding: 80px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
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
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        {/* <ProfileImage profileImage={profileImage} /> */}
        <div>
          {/* <SubTitle>안녕하세요</SubTitle> */}
          <Title>좋은 제품을 만들기 위한 고민을 담고 있습니다.</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
