import React, { useRef } from "react";
import { Input } from "components/common/Input";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";

const InfoNoticeOption = ({ value, optionList, setValue }) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    console.log(name);
    // name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <>
      {optionList.map((item) => (
        <InfoBox ref={formRef}>
          <Input
            ref={inputRef}
            width={"350px"}
            placeholder={item.title}
            name="title"
            // onChange={(e) => setValue(e.target.value)}
            onChange={onSubmit}
          />
          <Input
            ref={inputRef}
            width={"600px"}
            placeholder={item.contents}
            name="contents"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </InfoBox>
      ))}
    </>
  );
};

export default InfoNoticeOption;

const InfoBox = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  label {
    padding-left: 20px;
  }
`;
