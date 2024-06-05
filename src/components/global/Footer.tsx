import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
width: 100%;
height: 20vh;
color: var(--color-white);
padding: 3vh 0;

& > * {
  padding: 4px 0;
}
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p> 2024년 6월, 메이드 바이 차차 </p>
      <p> 아무런 정보도 저장하지 않아요! 아이디와 비밀번호 조차 저장하지 않으니 안심하고 일기를 써봐요 </p>
      <p> 일기를 쓰면 행복합니다^.^ </p>
    </ FooterContainer>
  );
};

export default Footer;
