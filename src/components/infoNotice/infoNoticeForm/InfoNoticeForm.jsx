import React from "react";
import { Button } from "components/common/Button";
import { Input } from "components/common/input";
// import styled from "styled-components";
import { PALLETS } from "style/theme";

/*"informationnotice" : {
							"productname": String,
							"origin": String,
							"ranking" : String,
							"custody" : String,
							"foodcode" : String,
							"key" : String,
						}*/

const infoDic = [
  {
    title: "제품명 / 중량",
    width: "600px",
  },
  {
    title: "원산지 / 원재료 함량",
    width: "600px",
  },
  {
    title: "등급",
    width: "600px",
  },
  {
    title: "보관",
    width: "600px",
  },
  {
    title: "식품 유형",
    width: "600px",
  },
];

const InfoNoticeForm = ({ content }) => {
  return (
    <div
      style={{
        backgroundColor: `${PALLETS.WHITE}`,
        width: "90%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        <h3>정보고시 {"생성순서"}</h3>

        {infoDic.map((item) => (
          <>
            <br />
            <br />
            <label>{item.title} </label>
            <Input width={item.width} placeholder={content} />
          </>
        ))}
      </form>
      <Button
        text={"+ 항목 추가"}
        width={100}
        bdcolor={PALLETS.BEIGE}
        bgcolor={PALLETS.WHITE}
        ftcolor={PALLETS.NAVY}
      />
    </div>
  );
};

export default InfoNoticeForm;
