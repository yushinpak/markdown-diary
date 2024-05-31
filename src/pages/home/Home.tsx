// 홈 화면 페이지
import React from "react";
import styled from "styled-components";

// 컴포넌트
import Button from "../../components/basedComponent/Button";
import Diary from "../../components/home/Diary";
import Search from "../../components/home/Search";

// 임시 데이터
import { tempTitle, tempContent, tempDate } from "../../../tempData";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <OptionContainer>
        <Search />
        <Button>새로 쓰다</Button>
      </OptionContainer>
      <Diary title={tempTitle} content={tempContent} date={tempDate} />
    </HomeContainer>
  );
};

export default Home;
