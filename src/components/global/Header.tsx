import React from "react";
import styled from "styled-components";
import HeaderButton from "../basedComponent/HeaderButton";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 3vh 8vh;
  color: var(--color-white);
  height: 30vh;
  background-color: pink; // 추후 삭제 코드
`;

const Title = styled(Link)`
  font-size: var(--font-size-hd3);
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
`;

const ButtonContainer = styled.div`
display: flex;
align-items: flex-start;
// background-color: yellow; // 추후 삭제 코드
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title to="/">타이틀</Title>
      <ButtonContainer>
        <HeaderButton>캘린더</HeaderButton>
        <HeaderButton to="/diary-information">일기장 정보수정</HeaderButton>
        <HeaderButton>로그아웃</HeaderButton>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
