import React from "react";
import styled from "styled-components";
import { PALLETS } from "style/theme";
import InsertImage from "components/common/InsertImage";

const BuyerRecommend = (props) => {
  return (
    <Wrapper>
      {/* <SideTitle>
           
          </SideTitle> */}
      <SetWrapper>
        <InsertImage width={"150px"} text={"+ 이미지 추가"} />
      </SetWrapper>
    </Wrapper>
  );
};

export default BuyerRecommend;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  /* border-top: 2px solid ${PALLETS.GRAY}; */
`;

const SideTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  min-width: 180px;
  font-size: 14px;
  font-weight: 600;
  color: ${PALLETS.BLACK};
  background: ${PALLETS.LIGHTGRAY};
  order: 1px solid ${PALLETS.BLACK};
`;

const SetWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 50px;
  height: inherit;
  width: 100%;
  background: ${PALLETS.WHITE};
`;
