import React, { useState } from "react";
import { Input } from "components/common/Input";
import styled from "styled-components";

const InfoNoticeOption = ({ onAdd, count }) => {
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
    <Container>
      <Warp>
        <InfoBox id={"new-option-form-" + count} onSubmit={onSubmitInput}>
          <Input
            width="230px"
            placeholder="항목 제목 자유 입력"
            name="title"
            value={title}
            onChange={onChangeInput}
          />
          <Input
            width="490px"
            placeholder="내용을 입력해주세요"
            name="placeholder"
            value={placeholder}
            onChange={onChangeInput}
          />
        </InfoBox>
      </Warp>
    </Container>
  );
};

export default InfoNoticeOption;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  margin-bottom: 50px;
`;

const Warp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoBox = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  margin-left: 10px;

  label {
    padding-left: 20px;
  }
`;
