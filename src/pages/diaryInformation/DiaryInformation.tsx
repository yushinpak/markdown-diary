import React from "react";
import styled from "styled-components";

// 컴포넌트
import Button from "../../components/basedComponent/Button";

interface DiaryInformationProps {
  // 추후 뭘로 받아오지?
  title?: string;
  date?: string; // 추후 알아보고 타입 변경. string인지 아닌지 제대로 모르겠음
  content?: string;
}

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    box-sizing: border-box;
    margin: 10px;
  }
`;

const Input = styled.input`
  display: flex;
  margin: 5px;
`;

const WithdrawalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DiaryInformation: React.FC<DiaryInformationProps> = () => {
  return (
    <>
      <h1>일기장 정보</h1>
      <ElementContainer>
        <p>일기장 이름</p>
        <Input />
      </ElementContainer>
      <ElementContainer>
        <p>일기 파일이 저장된 경로</p>
        <Input />
      </ElementContainer>

      <ElementContainer>
        <p>일기장 배경 사진</p>
        <Input />
      </ElementContainer>
      <ElementContainer>
        <Input />
        <Input />
      </ElementContainer>
      <ElementContainer>
        <p>일기장 색상</p>
        <Input />
      </ElementContainer>
      <ElementContainer>
        <p>일기장 하이라이트 컬러</p>
        <Input />
      </ElementContainer>
      <WithdrawalContainer>
        <Button padding="0 10px">수정하기</Button>
        <p>회원탈퇴</p>
      </WithdrawalContainer>
    </>
  );
};

export default DiaryInformation;
