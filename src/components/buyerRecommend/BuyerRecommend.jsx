import React from "react";
import styled from "styled-components";
import { PALLETS } from "style/theme";
import InsertImage from "components/common/InsertImage";

const BuyerRecommend = () => {
  return (
    <Wrapper>
      <Content>
        <InsertImage
          width="200px"
          radius="4px"
          text="+ 이미지 첨부"
          inputId="buyerrecommend"
          isMultiple="false"
        />
      </Content>
    </Wrapper>
  );
};

export default BuyerRecommend;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${PALLETS.WHITE};
`;

const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: 10px;
`;
