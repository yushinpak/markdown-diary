import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

import tempBackgroundImg from "./../../assets/defaultBackground_pink.jpeg";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: tempBackgroundImg;
`;

const Body = styled.div`
  display: flex;
  justify-content: center; // 중앙 정렬
  align-items: center;
  min-height: 100vh;
  // background-color: skyblue; // 추후 삭제 코드
`;

const Main = styled.div`
  width: 80vw;
  min-height: 80vh;
  background-color: var(--color-postbox);
  border: var(--color-point) solid 2px;
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
