import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

// import tempBackgroundImg from "./../../assets/defaultBackground_pink.jpeg";

const LayoutContainer = styled.div`
  // background-color: red; //추후 삭제 코드
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  // background-image: tempBackgroundImg;
`;

const Body = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;
  min-height: 100vh;
  // background-color: skyblue; // 추후 삭제 코드
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10vh 10vw;
  width: 80vw;
  min-height: 80vh;
  background-color: var(--color-postbox);
  // background-color: red; //추후 삭제 코드
  border: var(--color-point) solid 2px;
  // white-space: pre-wrap; // 추후 제대로 작동하게 만들어야해
`;

interface LayoutProps {
  component: React.ComponentType;
  // backgroundImage: string || Image={}; // url인데 어떻게 해야할지 잘 모르겠다!
}

const Layout: React.FC<LayoutProps> = ({
  component: Component,
  // backgroundImage,
}) => {
  return (
    <LayoutContainer>
      <Header />
      <Body>
        <Main>
          <Component />
        </Main>
      </Body>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
