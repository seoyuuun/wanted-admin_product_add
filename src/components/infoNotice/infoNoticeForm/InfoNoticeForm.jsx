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

const InfoNoticeForm = ({ count, onCountHandle, addNotice }) => {
  const [infoForm, setInfoForm] = useState({
    name: "",
    origin: "",
    ranking: "",
    keep: "",
    type: "",
  });

  const [optionList, setOptionList] = useState(infoDic);

  const onAdd = (newOption) => {
    /*
    {
      id: 5,
      title: "식품 유형",
      name: "type", // 추가한 항목의 name은 어떻게?
      content: "식품 유형을 입력해 주세요. (ex) 포장육",
    }
    */
    setOptionList((prev) => [
      ...prev,
      {
        ...newOption,
        name: newOption.title.replace(/ /g, "-"), // slugify cjk-slug
        id: prev.length + 1, // TODO: id 중복을 해결!
      },
    ]);
  };

  return (
    <>
      <Container>
        <Form
          id="new-notice-form"
          onSubmit={(e) => {
            e.preventDefault();
            onCountHandle();
            // 추가 로직!
            addNotice(infoForm);
            setInfoForm({
              name: "",
              origin: "",
              ranking: "",
              keep: "",
              type: "",
            });
            setOptionList(infoDic);
          }}
        >
          <h1>정보고시 {count}</h1>
          {/* 기본 입력 form */}
          {optionList.map((item, index) => (
            <InfoBox key={item.id}>
              <label htmlFor={item.name + "-input"}>{item.title}</label>
              <Input
                id={item.name + "-input"}
                width="600px"
                placeholder={item.placeholder}
                value={infoForm[item.name]}
                onChange={(e) => {
                  setInfoForm((prev) => ({
                    ...prev,
                    [item.name]: e.target.value,
                  }));
                }}
              />
            </InfoBox>
          ))}
          {/* 객체를 보고 싶으면 => {JSON.stringify(infoForm)} 로 확인해보자. */}
        </Form>
        {/* 옵션 */}
        <InfoNoticeOption onAdd={onAdd} />
      </Container>

      <AddButton type="submit" form="new-notice-form">
        + 정보고시 추가
      </AddButton>
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
const AddButton = styled.button`
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${PALLETS.NAVY};
  height: 50px;
  text-align: center;
  color: ${PALLETS.NAVY};
  background-color: ${PALLETS.LIGHTGRAY};
  font-size: 18px;
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
