import React, { useState } from "react";
import InfoNoticeForm from "./infoNoticeForm/InfoNoticeForm";
import { PALLETS } from "style/theme";
import styled from "styled-components";
const InfoNotice = () => {
  const [count, setCount] = useState(1);
  const [form, setForm] = useState([]);

  const onCountHandle = () => {
    setCount((prev) => prev + 1);
  };

  const addNotice = (notice) => {
    setForm(notice);
    console.log(form);
  };
  return (
    <InfoContainer>
      <InfoNoticeForm
        count={count}
        onCountHandle={onCountHandle}
        // addNotice={(notice) => console.log(notice)}
        addNotice={addNotice}
      />
    </InfoContainer>
  );
};

export default InfoNotice;

const InfoContainer = styled.section`
  padding: 20px;
  border: 1px solid black;
  width: 100%;
  height: 100%;
  background-color: ${PALLETS.LIGHTGRAY};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
