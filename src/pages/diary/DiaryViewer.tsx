import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

// 컴포넌트
import Button from "../../components/basedComponent/Button";
import DiaryMover from "../../components/diary/DiaryMover";

// 임시 상수
import { API_URL } from "../../../constants/defaultFile";

// 타입
import { DiaryItem } from "../home/Home";

// util 함수
import changeTimeForm from "../../../utils/changeTimeForm";

const ViewerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    box-sizing: border-box;
    padding: 10px 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * {
    box-sizing: border-box;
    margin: 0 4px;
    padding: 10px 7px;
  }
`;

const DiaryMoverContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    padding: 0 0;
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-hd2);
  font-weight: var(--font-weight-bold);
`;

const Date = styled.p`
  font-size: var(--font-size-sm2);
  font-weight: var(--font-weight-regular);
`;

const Content = styled.pre`
  font-size: var(--font-size-md1);
  white-space: pre-wrap; // 추후 더 상위 컴포넌트에서 조정할 수 있도록 수정
  line-height: var(--line-height-default);
  font-weight: var(--font-weight-medium);
`;

const DiaryViewer: React.FC<DiaryItem> = () => {
  const [diary, setDiary] = useState<DiaryItem>([]); // 추후 이거 배열인지 string인지 모르겠음
  const { title } = useParams<{ title: string }>();
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await axios.get(`${API_URL}${title}`);
        const diary = response.data;

        const refinedDiary = {
          title: diary.title,
          content: diary.content,
          createdAt: changeTimeForm(diary.createdAt),
        };
        setDiary(refinedDiary);
      } catch (err) {
        console.error("일기 하나 불러오기 실패", err);
      }
    };

    fetchDiary();
  }, []);

  const handleEdit = () => {
    // 글 수정 페이지로 이동
    window.location.href = `http://localhost:5173/diary-editor/${encodedTitle}`; //추후 방법 없는지 찾기
  };

  const handleDelete = async () => {
    // 글 삭제하기 API 연결
    try {
      await axios.delete(`${API_URL}${encodedTitle}`);
      console.log("삭제 완료 버튼"); // 추후 삭제

      // 일기 작성이 완료되었다는 알럿창
      if (confirm("일기를 정말로 삭제하시겠습니까?")) {
        alert("일기 삭제가 완료되었습니다");
      }
      // 첫화면으로 리다이렉트
      window.location.href = `http://localhost:5173/`; //추후 방법 없는지 찾기
    } catch (err) {
      console.error("일기를 삭제하는데 실패했습니다.", err);
    }
  };

  return (
    <ViewerContainer>
      <Title>{diary.title}</Title>
      <Date>{diary.createdAt}</Date>
      <Content>{diary.content}</Content>

      <ButtonContainer>
        <Button onClick={handleEdit}>수정하기</Button>
        <Button onClick={handleDelete}>삭제하기</Button>
      </ButtonContainer>
      <DiaryMoverContainer>
        <DiaryMover>이전 일기</DiaryMover>
        <DiaryMover>이후 일기</DiaryMover>
      </DiaryMoverContainer>
    </ViewerContainer>
  );
};

export default DiaryViewer;
