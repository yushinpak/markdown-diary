import React from "react";
import styled from "styled-components";

// 컴포넌트
import Button from "../../components/basedComponent/Button";

// 임시 데이터
import { tempTitle, tempContent } from "../../../tempData";

// 타입
import { DiaryItem } from "../home/Home";


const EditorContainer = styled.div`
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
`;

const Title = styled.input`
  font-size: var(--font-size-hd2);
  font-weight: var(--font-weight-bold); // 추후 - input에서의 weight와  h2에서의 weight이 왜 다를까..?
  background-color: transparent;
  border: none;

`;

const Content = styled.textarea`
  // 초기값에 따른 높이 조절은 코드를 통해 해야함
  font-size: var(--font-size-md1);
  font-weight: var(--font-weight-medium); //추후! 이거 좀 이상한 것 같음
  min-height: 90vh; // 추후 이 부분 때문에 박스 정렬 틀어짐
  height: 100vh; // 추후 코드로 auto가 되도록 조정
  white-space: pre-wrap; // 추후 더 상위 컴포넌트에서 조정할 수 있도록 수정
  line-height: var(--line-height-default);
  border: none;
  background-color: transparent;
`;

const DiaryEditor: React.FC<DiaryItem> = () => {
  
  return (
    <EditorContainer>
      <Title value={tempTitle} />
      <Content>{tempContent}</Content>
      <ButtonContainer>
        <Button>고쳐쓰기 완료</Button>
      </ButtonContainer>
    </EditorContainer>
  );
};

export default DiaryEditor;
