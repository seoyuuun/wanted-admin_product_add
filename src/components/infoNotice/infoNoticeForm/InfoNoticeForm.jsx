import React, { useState } from "react";
import { Input } from "components/common/Input";
import { Button } from "components/common/Button";
import styled from "styled-components";
import { PALLETS } from "style/theme";

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

const InfoNoticeForm = ({ count, notice, setNotice, delNotice }) => {
  const [optionList, setOptionList] = useState([]);

  function changeTitle(oldTitle, newTitle) {
    if (!Object.keys(notice).includes(newTitle)) {
      setOptionList((prev) =>
        prev.map((option) => {
          if (option.id === oldTitle || option.name === oldTitle) {
            return { ...option, name: newTitle };
          }

          return option;
        })
      );

      setNotice((prev) => {
        const value = prev[oldTitle];
        const result = {
          ...prev,
          [newTitle]: value,
        };
        delete result[oldTitle];
        return result;
      });
    }
  }

  function deleteOption(targetOption) {
    setOptionList((prev) =>
      prev.filter((option) => option.id !== targetOption.id)
    );

    setNotice((prev) => {
      const result = { ...prev };
      delete result[targetOption.name || targetOption.id];
      return result;
    });
  }

  return (
    <Container>
      <Warp>
        <Form id="new-notice-form">
          <HanderWarp>
            <h1>정보고시 {count}</h1>
            <Button
              text="삭제"
              width="100px"
              bdcolor={PALLETS.RED}
              bgcolor={PALLETS.WHITE}
              ftcolor={PALLETS.NAVY}
              onClick={() => {
                delNotice();
              }}
            />
          </HanderWarp>

          {infoDic.map((item) => (
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
          {optionList.map((item) => (
            <InfoBox key={item.id}>
              <Input
                id={item.id + "-title-input"}
                width="200px"
                placeholder="항목 제목 자유 입력"
                value={item.name}
                onChange={(e) => {
                  const newTitle = e.target.value;
                  changeTitle(item.name || item.id, newTitle);
                }}
              />
              <Input
                id={item.id + "-value-input"}
                width="600px"
                placeholder="내용을 입력해주세요"
                value={notice[item.name || item.id]}
                onChange={(e) => {
                  setNotice((prev) => ({
                    ...prev,
                    [item.name || item.id]: e.target.value,
                  }));
                }}
              />

              <Btn
                onClick={() => {
                  deleteOption(item);
                }}
              >
                삭제
              </Btn>
            </InfoBox>
          ))}
        </Form>
      </Warp>

      <Button
        onClick={() => {
          const newOption = { id: crypto.randomUUID(), name: "" };
          setOptionList((prev) => [...prev, newOption]);
        }}
        type="button"
        text="+ 항목 추가"
        width="200px"
        bdcolor={PALLETS.BEIGE}
        bgcolor={PALLETS.WHITE}
        ftcolor={PALLETS.NAVY}
      />
    </Container>
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
  margin-bottom: 20px;
`;

const Warp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Form = styled.div`
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
  }
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  label {
    width: 50%;
    padding-left: 20px;
  }
`;

const HanderWarp = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Btn = styled.button`
  width: 100px;
  border: 1px solid ${PALLETS.DARKGRAY};
  flex-shrink: 0;
  height: 45px;
  margin-left: 10px;
  text-align: center;
  color: ${PALLETS.RED}
  border-color: ${(props) => props.bd || `${PALLETS.BLACK}`};
  background-color: ${(props) => props.bg || `${PALLETS.WHITE}`};
`;
