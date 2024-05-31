import React from "react";
import styled from "styled-components";
import HeaderButton from "../basedComponent/HeaderButton";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 3vh 8vh;
  color: var(--color-white);
  height: 30vh;
  background-color: pink; // 추후 삭제 코드
`;

const Title = styled.h1`
  font-size: var(--font-size-hd3);
  // background-color: yellow; // 추후 삭제 코드
`;

const ButtonContainer = styled.div`
display: flex;
align-items: flex-start;
// background-color: yellow; // 추후 삭제 코드
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>타이틀</Title>
      <ButtonContainer>
        <HeaderButton>캘린더</HeaderButton>
        <HeaderButton>개인정보수정</HeaderButton>
        <HeaderButton>로그아웃</HeaderButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
