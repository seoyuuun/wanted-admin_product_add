import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import ExpoPeriodSet from 'components/productExpoSalesPeriod/ExposurePeriodSet';
import SalesPeriodSet from 'components/productExpoSalesPeriod/SalesPeriodSet';

const ExpoSalesPeriodSet = () => {
  return (
    <SectionWrapper>
      <HeadTitle>
        <span>노출 및 판매기간 설정</span>
      </HeadTitle>
      <ExpoPeriodSet />
      <SalesPeriodSet />
    </SectionWrapper>
  );
};

export default ExpoSalesPeriodSet;

const SectionWrapper = styled.section`
  margin: 30px 0;
  background: ${PALLETS.WHITE};
  border: 1px solid ${PALLETS.GRAY};
`;

const HeadTitle = styled.header`
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-weight: 700;
  color: ${PALLETS.BLACK};
  border-bottom: 1px solid ${PALLETS.GRAY};
  padding-left: 20px;
`;
