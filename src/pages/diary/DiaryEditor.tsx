import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  align-items: center;

  & > * {
    box-sizing: border-box;
    margin: 0 4px;
    padding: 10px 7px;
  }
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

const DiaryEditor: React.FC<DiaryItem> = () => {
  const [diary, setDiary] = useState<DiaryItem>([]);
  const { title } = useParams<{ title: string }>();
  let encodedTitle = encodeURIComponent(title);

  // 글 조회하기 API
  const fetchDiary = async () => {
    try {
      const response = await axios.get(`${API_URL}${title}`);
      const diary = response.data;

      const refinedDiary = {
        title: diary.title,
        content: diary.content,
        createdAt: diary.createdAt,
      };
      setDiary(refinedDiary);
    } catch (err) {
      console.error("일기 하나 불러오기 실패", err);
    }
  };

  useEffect(() => {
    fetchDiary();
  }, []);

  // 글 수정하기
  const handleEdit = async () => {
    try {
      await axios.put(`${API_URL}${encodedTitle}`, {
        title: diary.title,
        content: diary.content,
      });
      alert("일기 수정이 완료되었습니다");

      encodedTitle = diary.title;

      // 작성된 일기 화면으로 리다이렉트
      window.location.href = `http://localhost:5173/${encodedTitle}`; //추후 방법 없는지 찾기
    } catch (err) {
      console.error("일기 수정이 실패했습니다");
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiary({ ...diary, title: e.target.value });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDiary({ ...diary, content: e.target.value });
  };

  return (
    <EditorContainer>
      <Title value={diary.title} onChange={handleTitleChange} />
      <Content value={diary.content} onChange={handleContentChange} />
      <ButtonContainer>
        <Button onClick={handleEdit}>고쳐쓰기 완료</Button>
      </ButtonContainer>
    </EditorContainer>
  );
};

export default DiaryEditor;
