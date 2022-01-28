import React, { useState } from "react";
import { Input } from "components/common/Input";

import styled from "styled-components";
import { PALLETS } from "style/theme";
import InfoNoticeOption from "../infoNoticeOption/InfoNoticeOption";

const infoDic = [
  {
    id: 1,
    name: "name",
    title: "제품명 / 중량",
    placeholder: "제품명/중량을 입력해 주세요.",
  },
  {
    id: 2,
    name: "origin",
    title: "원산지 / 원재료 함량",
    placeholder: "원산지/원재 함량을 입력해 주세요.",
  },
  {
    id: 3,
    name: "ranking",
    title: "등급",
    placeholder: "등급 (근내지방도 수치)를 입력해 주세요.",
  },
  {
    id: 4,
    title: "보관",
    name: "keep",
    placeholder: "보관 방식을 입력해주세요",
  },
  {
    id: 5,
    title: "식품 유형",
    name: "type",
    placeholder: "식품 유형을 입력해 주세요. (ex) 포장육",
  },
];

const InfoNoticeForm = ({ count, notice, setNotice }) => {
  const [optionList, setOptionList] = useState(infoDic);

  const onAdd = (newOption) => {
    setOptionList((prev) => [
      ...prev,
      {
        ...newOption,
        name: newOption.title.replace(/ /g, "-"), // slugify cjk-slug
        id: prev.length + 1, // TODO: id 중복을 해결!
      },
    ]);
  };

  const onDel = (event) => {
    if (optionList.length <= 5) return;
    setOptionList((old) => old.slice(0, old.length - 1));
  };

  // console.log("optionForm length", Object.keys(optionForm).length);
  console.log("optionList : ", optionList.length);
  return (
    <>
      <Container>
        <Form id="new-notice-form">
          {/* 기본 입력 form */}
          <h1>정보고시 {count}</h1>
          {optionList.map((item) => (
            <InfoBox key={item.id}>
              <label htmlFor={item.name + "-input"}>{item.title}</label>
              <Input
                id={item.name + "-input"}
                width="600px"
                placeholder={item.placeholder}
                value={notice[item.name]}
                onChange={(e) => {
                  setNotice((prev) => ({
                    ...prev,
                    [item.name]: e.target.value,
                  }));
                }}
              />
            </InfoBox>
          ))}

          {/* 객체는 => {JSON.stringify(infoForm)}으로 확인 */}
        </Form>
        {/* 옵션 */}
        <InfoNoticeOption count={count} onAdd={onAdd} onDel={onDel} />
      </Container>
    </>
  );
};

export default InfoNoticeForm;

const Container = styled.div`
  background-color: ${PALLETS.WHITE};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 20px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  label {
    padding-left: 20px;
  }
`;
