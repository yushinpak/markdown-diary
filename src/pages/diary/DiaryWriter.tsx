import axios from "axios";
import { useState, useCallback } from "react";
import React from "react";
import styled from "styled-components";
import { debounce } from "lodash";

// 컴포넌트
import Button from "../../components/basedComponent/Button";

// 임시 상수
import { API_URL } from "../../../constants/defaultFile";

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
  font-weight: var(
    --font-weight-bold
  ); // 추후 - input에서의 weight와  h2에서의 weight이 왜 다를까..?
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

const DiaryWriter: React.FC<DiaryItem> = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // debounced title, content
  const debouncedSetTitle = useCallback(
    debounce((value: string) => setTitle(value), 300),
    [setTitle]
  );

  const debouncedSetContent = useCallback(
    debounce((value: string) => setContent(value), 300),
    [setContent]
  );

  // handle title, content
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    debouncedSetContent(e.target.value);
  };

  // useEffect(() => {
  //   // 확인용 코드. 추후 삭제
  //   console.log("Title changed:", title);
  //   console.log("Content changed:", content);
  // }, [title, content]);

  // 글 등록하기
  const handleSubmit = async () => {
    // 글 저장(등록) API 연결
    try {
      await axios.post(`${API_URL}write`, { title, content });
      console.log("작성완료 버튼 클릭"); // 추후 삭제

      // 일기 작성이 완료되었다는 알럿창
      alert("일기 작성이 완료되었습니다");

      // 작성된 일기 화면으로 리다이렉트
      const encodedTitle = encodeURIComponent(title);
      window.location.href = `http://localhost:5173/${encodedTitle}`; //추후 방법 없는지 찾기
    } catch (err) {
      console.error("일기를 등록하는데 실패했습니다.", err);
    }
  };

  return (
    <EditorContainer>
      <Title
        placeholder="오늘은 무슨 일이 있었나요?"
        onChange={handleTitleChange}
      />
      <Content placeholder="일기를 적어주세용" onChange={handleContentChange} />
      <ButtonContainer>
        <Button onClick={() => handleSubmit()}>작성 완료</Button>
      </ButtonContainer>
    </EditorContainer>
  );
};

export default DiaryWriter;
