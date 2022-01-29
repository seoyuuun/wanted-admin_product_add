import React from "react";
import Contentwrap from "components/layout/Contentwrap";
import styled from "styled-components";
import { PALLETS } from "style/theme";
import BuyerRecommend from "components/buyerRecommend/BuyerRecommend";

const BuyerRecmmend = () => {
  return (
    <Contentwrap title="구매자 추천 이미지">
      <Contentwrap.Main>
        <Wrap>
          <BuyerRecommend />
        </Wrap>
      </Contentwrap.Main>
    </Contentwrap>
  );
};

export default BuyerRecmmend;

const Wrap = styled.section`
  box-sizing: border-box;
  background: ${PALLETS.LIGHTGRAY};
`;
