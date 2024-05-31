import styled from "styled-components";

interface DiaryProps {
  // 추후 다 필수 값으로 변경
  title?: string;
  date?: string; // 추후 알아보고 타입 변경. string인지 아닌지 제대로 모르겠음
  content?: string;
}

const DiaryContainer = styled.div`
  padding: 10px 0;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: var(--color-text);
  line-height: 1.7;
  border-bottom: solid 2px var(--color-point);
`;

const H2 = styled.h2`
  font-size: var(--font-size-hd1);
  font-weight: var(--font-weight-medium);
  white-space: pre-wrap;
`;

const Date = styled.p`
margin: 5px 0;
`;

const Content = styled.p`
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-md1);
  // white-space: pre-wrap; // 추후 - 줄바꿈 넣을까말까..?? 일단 지금은 빼는 걸로
  color: var(--text-color);
`;

function trimmedContent(content: string): string {
  let trimmedContent = content.split(" ").slice(0, 50).join(" ");
  trimmedContent += "···";

  return trimmedContent;
}

const Diary: React.FC<DiaryProps> = ({ title, date, content }) => {
  const testContent = trimmedContent(content || "");

  return (
    <DiaryContainer>
      <H2>{title}</H2>
      <Date>{date}</Date>
      {/* <Content>{content}</Content> */}
      <Content>{testContent}</Content>
    </DiaryContainer>
  );
};

export default Diary;
