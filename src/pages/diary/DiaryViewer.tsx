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
import removeExtension from "../../../utils/removeExtension";
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

& > * {
  box-sizing: border-box;
  margin: 0 4px;
}
`;

const DiaryMoverContainer = styled.div`
display: flex;
justify-content: space-between;`;

const Title = styled.h1`
  font-size: var(--font-size-hd2);
  font-weight: var(--font-weight-bold);
`;

const Date = styled.p`
  font-size: var(--font-size-sm2);
  font-weight:var(--font-weight-regular);
`;

const Content = styled.pre`
  font-size: var(--font-size-md1);
  white-space: pre-wrap; // 추후 더 상위 컴포넌트에서 조정할 수 있도록 수정
  line-height: var(--line-height-default);
  font-weight: var(--font-weight-medium);
`;

const DiaryViewer: React.FC<DiaryItem> = () => {
  const [diary, setDiary] = useState<DiaryItem>([]); // 추후 이거 배열인지 string인지 모르겠음
  const { title } = useParams<{title: string}>();

const fetchDiary = async () => {
  try {
    const response = await axios.get(`${API_URL}${title}`);
    const diary = response.data;

    const refinedDiary = {
      title: diary.title,
      content: diary.content,
      createdAt: changeTimeForm(diary.createdAt),
    }

    setDiary(refinedDiary);

  } catch (err) {
    console.error("일기 하나 불러오기 실패", err);
  }
}

useEffect(() => {
  fetchDiary();
}, [])

  return (
    <ViewerContainer>
      <Title>{diary.title}</Title>
      <Date>{diary.createdAt}</Date>
      <Content>{diary.content}</Content>

      <ButtonContainer>
        <Button>글 수정하기</Button>
        <Button>글 삭제하기</Button>
      </ButtonContainer>
      <DiaryMoverContainer>
        <DiaryMover>이전 일기</DiaryMover>
        <DiaryMover>이후 일기</DiaryMover>
      </DiaryMoverContainer>
    </ViewerContainer>
  );
};

export default DiaryViewer;
