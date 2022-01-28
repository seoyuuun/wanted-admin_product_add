import React from "react";
import InfoNoticeForm from "./infoNoticeForm/InfoNoticeForm";
import { Button } from "components/common/Button";
import { PALLETS } from "style/theme";

const content = {
  제품명: "제품명/중량을 입력해 주세요.",
  원산지: "원산지/원재 함량을 입력해 주세요.",
  등급: "등급 (근내지방도 수치)를 입력해 주세요.",
  보관: "보관 방식을 입력해주세요",
  식품유형: "식품 유형을 입력해 주세요. (ex) 포장육",
};

const InfoNotice = (props) => {
  return (
    <section
      style={{
        margin: "250px",
        width: "1200px",
        height: "900px",
        border: "1px solid black",
        backgroundColor: `${PALLETS.LIGHTGRAY}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfoNoticeForm content={content} />
      <Button
        text={"+ 정보고시 추가"}
        // width={500}
        bdcolor={PALLETS.NAVY}
        bgcolor={PALLETS.BEIGE}
        ftcolor={PALLETS.NAVY}
      />
    </section>
  );
};

export default InfoNotice;
