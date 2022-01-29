import React, { useState } from "react";
import Toggle from "components/common/Toggle";
import styled from "styled-components";
import { PALLETS } from "style/theme";

const ProductOrderStart = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Wrapper>
      <SideTitle>
        <div>
          사용자 배송일 <br />
          <br /> 출발일 지정
        </div>
      </SideTitle>
      <SetWrapper>
        <Toggle
          isToggled={isToggled}
          onToggle={() => setIsToggled(!isToggled)}
        />
      </SetWrapper>
    </Wrapper>
  );
};

export default ProductOrderStart;

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${PALLETS.GRAY};
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
