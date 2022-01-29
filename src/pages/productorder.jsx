import Contentwrap from "components/layout/Contentwrap";
import styled from "styled-components";
import ProductOrderStart from "components/productOrderSet/ProductOrderStart";
import { PALLETS } from "style/theme";
import ProductPickUp from "components/productOrderSet/ProductPickUp";

const Productorder = () => {
  return (
    <Contentwrap title="상품 옵션">
      <Contentwrap.Main>
        <Wrap>
          <ProductOrderStart />
          <ProductPickUp />
        </Wrap>
      </Contentwrap.Main>
    </Contentwrap>
  );
};

export default Productorder;

const Wrap = styled.section`
  box-sizing: border-box;
  background: ${PALLETS.LIGHTGRAY};
`;
