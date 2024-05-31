// 스타일 같은 거 싹 다 새로해야함

import styled from "styled-components";

interface DiaryMoverProps {
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  onclick?: () => void;
}

const StyledDiaryMover = styled.button<DiaryMoverProps>`
  // margin: 10px 5px;
  padding: 10px 10px;
  color: var(--color-point);
  background-color: transparent;
  border: none;
  // border-bottom: var(--color-point) 2px solid;
`;

const DiaryMover: React.FC<DiaryMoverProps> = ({
  margin,
  padding,
  onclick,
  children,
}) => {
  return (
    <StyledDiaryMover margin={margin} padding={padding} onclick={onclick}>
      {children}
    </StyledDiaryMover>
  );
};

export default DiaryMover;
