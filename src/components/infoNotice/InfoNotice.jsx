import React, { useState } from "react";
import InfoNoticeForm from "./infoNoticeForm/InfoNoticeForm";
import { PALLETS } from "style/theme";
import styled from "styled-components";
const InfoNotice = () => {
  const [count, setCount] = useState(2);
  const [form, setForm] = useState([{ count: 1 }]);

  const addNotice = (newNotice) => {
    setCount((prev) => prev + 1);
    setForm((prev) => [...prev, { ...newNotice, count }]);
  };

  const delNotice = (noticeCount) => {
    if (count <= 1) return;
    setCount((prev) => prev - 1);

    setForm((prev) => prev.slice(0, prev.length - 1));
  };

  console.log("InfoNotice Data Result", JSON.stringify(form));
  return (
    <InfoContainer>
      {form.map((notice) => (
        <InfoNoticeForm
          key={notice.count}
          count={notice.count}
          notice={notice}
          delNotice={delNotice}
          setNotice={(transform) => {
            setForm((oldForm) =>
              oldForm.map((oldNotice) => {
                if (oldNotice.count !== notice.count) return oldNotice;
                return transform(oldNotice);
              })
            );
          }}
        />
      ))}
      <AddButton
        onClick={() => {
          addNotice();
        }}
      >
        + 정보고시 추가
      </AddButton>
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

const AddButton = styled.button`
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${PALLETS.NAVY};
  height: 50px;
  text-align: center;
  color: ${PALLETS.NAVY};
  background-color: ${PALLETS.LIGHTGRAY};
  font-size: 18px;
`;
