import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
width: 100%;
height: 35vh;
background-color: aqua; // 추후 삭제 코드
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p> 이것이 푸터다 </p>
    </ FooterContainer>
  );
};

export default Footer;
