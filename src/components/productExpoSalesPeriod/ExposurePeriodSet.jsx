import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import Radio from 'components/common/Radio';
import DateRange from 'components/common/datepicker/DateRange';

const ExposurePeriodSet = () => {
  const [exposureOption, setExposureOption] = useState('제한 없음');

  const [exposureStartTime, setExposureStartTime] = useState(
    new Date('YYYY.MM.DD YY:MM')
  );
  const [exposureEndTime, setExposureEndTime] = useState(
    new Date('YYYY.MM.DD YY:MM')
  );

  const handleExposureOption = (e) => {
    const value = e.target.value;
    setExposureOption(value);
  };

  useEffect(() => {
    new Date().getTime() > exposureEndTime.getTime() &&
      setExposureOption('미노출');
  }, [exposureEndTime]);

  return (
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
  );
};

export default ExposurePeriodSet;

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
