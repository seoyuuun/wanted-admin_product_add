import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import Radio from 'components/common/Radio';
import DateRange from 'components/common/datepicker/DateRange';

const SalesPeriodSet = () => {
  const [salesOption, setSalesOption] = useState('제한 없음');

  const [salesStartTime, setSalesStartTime] = useState(
    new Date('YYYY.MM.DD YY:MM')
  );
  const [salesEndTime, setSalesEndTime] = useState(
    new Date('YYYY.MM.DD YY:MM')
  );

  const handleSalesOption = (e) => {
    const value = e.target.value;
    setSalesOption(value);
  };

  useEffect(() => {
    new Date().getTime() > salesEndTime.getTime() && setSalesOption('미노출');
  }, [salesEndTime]);

  return (
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
  );
};

export default SalesPeriodSet;

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
