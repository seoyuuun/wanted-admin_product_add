import React, { useState } from "react";
import InfoNoticeForm from "./infoNoticeForm/InfoNoticeForm";
import { PALLETS } from "style/theme";
import styled from "styled-components";

const infoDic = [
  {
    id: 1,
    title: "제품명 / 중량",
    width: "600px",
    content: "제품명/중량을 입력해 주세요.",
  },
  {
    id: 2,
    title: "원산지 / 원재료 함량",
    width: "600px",
    content: "원산지/원재 함량을 입력해 주세요.",
  },
  {
    id: 3,
    title: "등급",
    width: "600px",
    content: "등급 (근내지방도 수치)를 입력해 주세요.",
  },
  {
    id: 4,
    title: "보관",
    width: "600px",
    content: "보관 방식을 입력해주세요",
  },
  {
    id: 5,
    title: "식품 유형",
    width: "600px",
    content: "식품 유형을 입력해 주세요. (ex) 포장육",
  },
];

const InfoNotice = () => {
  const [count, setCount] = useState(1);

  const onCountHandle = () => {
    setCount({ ...count, count: count + 1 });
  };

  return (
    <InfoContainer>
      <InfoNoticeForm
        infoDic={infoDic}
        count={count}
        onCountHandle={onCountHandle}
      />
      <AddButton>+ 정보고시 추가</AddButton>
    </InfoContainer>
  );
};

export default InfoNotice;

const InfoContainer = styled.section`
  padding: 20px;
  border: 1px solid black;
  width: 1200px;
  height: 900px;
  background-color: ${PALLETS.LIGHTGRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddButton = styled.button`
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${PALLETS.NAVY};
  height: 50px;
  text-align: center;
  color: ${PALLETS.NAVY};
  background-color: ${PALLETS.LIGHTGRAY};
  font-size: 18px;
`;
