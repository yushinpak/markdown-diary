import styled from "styled-components";
import { Link } from "react-router-dom";

interface DiaryProps {
  // 추후 다 필수 값으로 변경
  title?: string;
  date?: string; 
  content?: string;
  to?: string;
}

const DiaryContainer = styled(Link)`
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

function trimmedContent(content: string): string {
  let trimmedContent = content.split(" ").slice(0, 35).join(" ");
  trimmedContent += "···";

  return trimmedContent;
}

const Diary: React.FC<DiaryProps> = ({ title, date, content, to}) => {
  const testContent = trimmedContent(content || "");

  return (
    <DiaryContainer to={to}>
      <H2>{title}</H2>
      <Date>{date}</Date>
      {/* <Content>{content}</Content> */}
      <Content>{testContent}</Content>
    </DiaryContainer>
  );
};

export default Diary;
