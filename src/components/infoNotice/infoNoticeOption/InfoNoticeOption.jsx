import React from "react";

import { Input } from "components/common/Input";
import { Button } from "components/common/Button";

import styled from "styled-components";
import { PALLETS } from "style/theme";
import { useState } from "react/cjs/react.development";

const InfoNoticeOption = ({ onAdd, onDel, count }) => {
  const [optionForm, setOptionForm] = useState({
    title: "",
    placeholder: "",
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setOptionForm({
      ...optionForm,
      [name]: value,
    });
  };

  const { title, placeholder } = optionForm;

  const onSubmitInput = (e) => {
    e.preventDefault();
    if (!title || !placeholder) return;
    onAdd(optionForm);
    setOptionForm({
      title: "",
      placeholder: "",
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <InfoBox id={"new-option-form-" + count} onSubmit={onSubmitInput}>
          <Input
            width="30%"
            placeholder="항목 제목 자유 입력"
            name="title"
            value={title}
            onChange={onChangeInput}
          />
          <Input
            width="50%"
            placeholder="내용을 입력해주세요"
            name="placeholder"
            value={placeholder}
            onChange={onChangeInput}
          />
        </InfoBox>
        <Button
          text="삭제"
          width="100px"
          bdcolor={PALLETS.RED}
          bgcolor={PALLETS.WHITE}
          ftcolor={PALLETS.NAVY}
          onClick={onDel}
        />
      </div>

      <Button
        form={"new-option-form-" + count}
        type="submit"
        text="+ 항목 추가"
        width={100}
        bdcolor={PALLETS.BEIGE}
        bgcolor={PALLETS.WHITE}
        ftcolor={PALLETS.NAVY}
      />
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
