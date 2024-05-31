import styled from "styled-components";
import React from "react";

// 컴포넌트
import Button from "../basedComponent/Button";

const Container = styled.div`
  display: flex;
`;

const Input = styled.input`
  margin: 0 7px;
  padding: 10px 10px;
  width: 20vw;
  color: black;
  background-color: transparent;
  border: none;
  border-bottom: var(--color-point) 2px solid;
`;

const Select = styled.select`
  padding: 10px 10px;
  color: black;
  background-color: transparent;
  border: none;
  border-bottom: var(--color-point) 2px solid;
`;

const Search: React.FC = () => {
  return (
    <Container>
      <Select>
        <option key="title" value="title">
          제목
        </option>
        <option key="titleAndContent" value="titleAndContent">
          제목과 내용
        </option>
      </Select>
      <Input placeholder="검색어를 입력하세요"/>
      <Button>검색하다</Button>
    </Container>
  );
};

export default Search;
