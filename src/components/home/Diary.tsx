import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { DiaryItem } from "../../pages/home/Home";

const DiaryContainer = styled.div`
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: var(--color-text);
  line-height: var(--line-height-default);
  border-bottom: solid 2px var(--color-point);
  cursor: pointer;
  text-decoration: none;
  // background-color: red; //추후 삭제 코드
`;

const H2 = styled.h2`
  font-size: var(--font-size-hd1);
  font-weight: var(--font-weight-bold);
  // white-space: pre-wrap; //추후
`;

const Date = styled.p`
  margin: 5px 0;
  font-size: var(--font-size-sm2);
  font-weight: var(--font-weight-regular);
  color: var(--color-grey);
`;

const Content = styled.p`
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-md1);
  // white-space: pre-wrap; // 추후 - 줄바꿈 넣을까말까..?? 일단 지금은 빼는 걸로
  color: var(--text-color);
`;




const Diary: React.FC<DiaryItem> = ({ title, createdAt, content, }) => {
  const navigate = useNavigate();

  function ContentTrimmer (content: string): string {
    let result = content.split(" ").slice(0, 35).join(" ");
    result += "···";
  
    return result;
  }
  
  const trimmedContent = ContentTrimmer(content || "");

  const handleDiaryClick = () => {
    navigate(`${title}`)
  }

  return (
    <DiaryContainer onClick={handleDiaryClick}>
      <H2>{title}</H2>
      <Date>{createdAt}</Date>
      <Content>{trimmedContent}</Content>
    </DiaryContainer>
  );
};

export default Diary;
