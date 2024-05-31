import React from "react";
import styled from "styled-components";

// 컴포넌트
import Button from "../../components/basedComponent/Button";
import DiaryMover from "../../components/diary/DiaryMover";

// 임시 데이터
import { tempTitle, tempContent, tempDate } from "../../../tempData";

interface DiaryViewerProps {
  // 추후 그냥 diary props와 합
  // 추후 다 필수 값으로 변경
  title?: string;
  date?: string; // 추후 알아보고 타입 변경. string인지 아닌지 제대로 모르겠음
  content?: string;
}

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

const DiaryViewer: React.FC<DiaryViewerProps> = ({title, date, content}) => {


  return (
    <ViewerContainer>
      <Title>{tempTitle}</Title>
      <Date>{tempDate}</Date>
      <Content>{tempContent}</Content>

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
