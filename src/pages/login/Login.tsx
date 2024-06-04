import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/defaultBackground_pink.jpeg";

interface TextProps {
  fontColor?: string;
  fontSize?: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${backgroundImage});
  height: 100vh;
  font-family: "YESMyoungjo-Regular", sans-serif;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vw;
  color: var(--color-white);
  padding: 5vh 3vw;
  box-sizing: border-box;
`;

const P = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || "var(--font-size-hd1)"};
  color: ${(props) => props.fontColor || "var(--color-white)"};
  padding: 5px 0;
`;

const LoginPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 0;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--color-postbox);
  width: 45vw;
  color: var(--color-black);

  border: 2px solid var(--color-point);

  & > * {
    margin: 5px;
  }
`;

const KakaoButton = styled.button`
  background-color: #fee500;
  radius: 12px;
  border: none;
  height: 6vh;
  width: 25vw;
  color: #000000;
  cursor: pointer;
  border-radius: 12px;
`;

const NaverButton = styled.button`
  background-color: #03c75a;
  radius: 12px;
  border: none;
  height: 6vh;
  width: 25vw;
  color: white;
  cursor: pointer;
  border-radius: 12px;
`;

const Login: React.FC = () => {
  return (
    <Container>
      <Description>
        <P fontSize="var(--font-size-hd3)">나만의 일기장 서비스</P>
        <P fontSize="var(--font-size-hd3)">길게 뻗은 방</P>
        <P>세상에서 나만 아는 비밀을 털어놓는 일기장,</P>
        <P>'길게 뻗은 방'은 사용자의 비밀을 지키기 위해</P>
        <P>오직 사용자의 로컬 컴퓨터에 저장된 파일을 기반으로 동작하며</P>
        <P>
          자체 가입 기능 대신 소셜로그인을 사용하여 사용자의 아이디와 비밀번호를
          포함하여
        </P>
        <P>일기 안의 어떠한 정보도 직접 저장하지 않습니다</P>
        <P>길게 뻗은 방에서 지난 일기를 검색하고 오늘의 일기를 작성해보세요!</P>
      </Description>
      <LoginPart>
        <P fontColor="var(--color-text)">
          서비스 사용을 위해서는 로그인이 필요합니다
        </P>
        <KakaoButton>카카오 로그인</KakaoButton>
        <NaverButton>네이버 로그인</NaverButton>
      </LoginPart>
    </Container>
  );
};

export default Login;
