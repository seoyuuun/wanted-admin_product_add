import React from "react";
import { Button } from "components/common/Button";
import { Input } from "components/common/Input";
import styled from "styled-components";
import { PALLETS } from "style/theme";
import InfoNoticeOption from "../infoNoticeOption/InfoNoticeOption";
import { useState } from "react/cjs/react.development";

/*"informationnotice" : {
							"productname": String,
							"origin": String,
							"ranking" : String,
							"custody" : String,
							"foodcode" : String,
							"key" : String,
						}*/

const InfoNoticeForm = ({ infoDic, count, onCountHandle }) => {
  const [value, setValue] = useState("");
  const [optionList, setOptionList] = useState([
    {
      title: "항목 제목 자유 입력",
      contents: "내용을 입력해주세요",
    },
  ]);

  const addOption = ({ title, contents }) => {
    const newOption = [...optionList, { title: title, contents: contents }];
    setOptionList(newOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    if (e.currentTarget.name === "title") {
      addOption({ title: e.currentTarget.name });
    } else addOption({ contents: e.currentTarget.name });

    addOption(value);
    setValue("");
  };

  return (
    <Container onChange={onCountHandle}>
      <Form>
        <h1>정보고시 {count}</h1>
        {infoDic.map((item) => (
          <InfoBox key={item.length}>
            <label>{item.title} </label>
            <Input width={item.width} placeholder={item.content} />
          </InfoBox>
        ))}

        <InfoNoticeOption
          optionList={optionList}
          addOption={addOption}
          value={value}
          setValue={setValue}
        />
        <div onSubmit={handleSubmit}>
          <Button
            text={"+ 항목 추가"}
            width={100}
            bdcolor={PALLETS.BEIGE}
            bgcolor={PALLETS.WHITE}
            ftcolor={PALLETS.NAVY}
          />
        </div>
      </Form>
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
