import React, { useState } from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import Radio from 'components/common/Radio';
import DateRange from 'components/common/datepicker/DateRange';

const ExpoSalesPeriodSet = () => {
  const [exposureOption, setExposureOption] = useState('제한 없음');
  const [salesOption, setSalesOption] = useState('제한 없음');

  const handleExposureOption = (e) => {
    const value = e.target.value;
    setExposureOption(value);
  };

  const handleSalesOption = (e) => {
    const value = e.target.value;
    setSalesOption(value);
  };

  return (
    <SectionWrapper>
      <HeadTitle>
        <span>노출 및 판매기간 설정</span>
      </HeadTitle>
      <Wrapper>
        <SideTitle>
          <span>상품 노출 기한</span>
        </SideTitle>
        <RadioWrapper>
          <Radio
            content={'제한 없음'}
            id="exposePeriod"
            select={exposureOption}
            onChangeValue={handleExposureOption}
          />
          <Radio
            content={'미노출'}
            id="exposePeriod"
            select={exposureOption}
            onChangeValue={handleExposureOption}
          />
          <Radio
            content={'노출 기간 설정'}
            id="exposePeriod"
            select={exposureOption}
            onChangeValue={handleExposureOption}
          />
          <DateRange />
        </RadioWrapper>
      </Wrapper>
      <Wrapper>
        <SideTitle>
          <span>상품 판매 기한</span>
        </SideTitle>
        <RadioWrapper>
          <Radio
            content={'제한 없음'}
            id="salesPeriod"
            select={salesOption}
            onChangeValue={handleSalesOption}
          />
          <Radio
            content={'미노출'}
            id="salesPeriod"
            select={salesOption}
            onChangeValue={handleSalesOption}
          />
          <Radio
            content={'판매 기간 설정'}
            id="salesPeriod"
            select={salesOption}
            onChangeValue={handleSalesOption}
          />
          <DateRange />
        </RadioWrapper>
      </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid ${PALLETS.GRAY};
`;

const SideTitle = styled.div`
  min-width: 180px;
  font-size: 14px;
  font-weight: 600;
  padding: 50px 20px 0;
  color: ${PALLETS.BLACK};
  background: ${PALLETS.LIGHTGRAY};
`;

const RadioWrapper = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 30px;
  color: ${PALLETS.BLACK};
`;
