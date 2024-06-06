// 홈 화면 페이지
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 컴포넌트
import Button from "../../components/basedComponent/Button";
import Diary from "../../components/home/Diary";
import Search from "../../components/home/Search";

// 임시 상수
import { API_URL } from "../../../constants/defaultFile";

// util 함수
import removeExtension from "../../../utils/removeExtension";
import changeTimeForm from "../../../utils/changeTimeForm";

// 타입 정의 -> 추후 다른 폴더로 옮기기
export interface DiaryItem {
  title: string;
  content: string;
  readonly createdAt: string;
}

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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [diaryList, setDiaryList] = useState<DiaryItem[]>([]);

  // 일기 전체 목록 불러오기
  const fetchDiaryList = async () => {
    try {
      // 일기 목록 가져오기
      const response = await axios.get(`${API_URL}diary`);
      const DiaryList = response.data;

      // 일기 목록 시간순 정렬
      const sortedDiaryList = DiaryList.sort((a: DiaryItem, b: DiaryItem) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      // 일기 이름에서 md 제거, 시간 형식 바꾸기
      const refinedDiaryList = sortedDiaryList.map((diary: DiaryItem) => {
        return {
          title: removeExtension(diary.title),
          content: diary.content,
          createdAt: changeTimeForm(diary.createdAt),
        };
      });

      //
      setDiaryList(refinedDiaryList);
    } catch (err) {
      console.error("일기 불러오기 실패");
    }
  };

  useEffect(() => {
    fetchDiaryList();
  }, []);

  const handleWriteButtonClick = () => {
    navigate("diary-writer");
  };

  return (
    <HomeContainer>
      <OptionContainer>
        <Search />
        <Button onClick={handleWriteButtonClick}>새로 쓰다</Button>
      </OptionContainer>
      {diaryList.map((diary, index) => (
        <Diary
          key={index}
          title={diary.title}
          content={diary.content}
          createdAt={diary.createdAt}
        />
      ))}
    </HomeContainer>
  );
};

export default Home;
