// 홈 화면 페이지
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

// 컴포넌트
import Button from "../../components/basedComponent/Button";
import Diary from "../../components/home/Diary";
import Search from "../../components/home/Search";

// 임시 데이터
// import { tempTitle, tempContent, tempDate } from "../../../tempData";

// 임시 상수
import { API_URL } from "../../../constants/defaultFile";

// styled-components
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

  interface DiaryItem {
    title: string;
    content: string;
    createdAt : string;
  }


const Home: React.FC = () => {
  const [diaryList, setDiaryList] = useState<DiaryItem[]>([]);


  // 일기 목록 불러오기
  const fetchDiaryList = async () => {
    try {
      // 일기 목록 가져오기
      const response = await axios.get(`${API_URL}diary`);
      const DiaryList = response.data;

      // 일기 목록 시간순 정렬
      const sortedDiaryList = DiaryList.sort((a: DiaryItem, b: DiaryItem) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      // 일기 이름에서 md 제거 
      // 시간 조정하는 함수
      setDiaryList(sortedDiaryList);


    } catch (err) {
      console.error("일기 불러오기 실패");
    }
  };

  useEffect(() => {
    fetchDiaryList();
  }, []);

  return (
    <HomeContainer>
      <OptionContainer>
        <Search />
        <Button>새로 쓰다</Button>
      </OptionContainer>
      {diaryList.map((diary, index) => (
        <Diary
          key={index}
          title={diary.title}
          content={diary.content}
          date={diary.createdAt}
        />
      ))}
    </HomeContainer>
  );
};

export default Home;
