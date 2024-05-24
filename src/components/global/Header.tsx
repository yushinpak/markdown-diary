import React from 'react';
import styled from "styled-components";
import HeaderButton from "../basedComponent/HeaderButton";

const HeaderContainer = styled.div`
width: 100%;
height: 40vh;
background-color: yellow; // 추후 삭제 코드
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
        <HeaderButton />
        <p>이것이 헤더다</p>
    </ HeaderContainer>
  );
}

export default Header;