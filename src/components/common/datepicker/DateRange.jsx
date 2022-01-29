import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRange = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  let handleColor = (time) => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  return (
    <DateRangeWrapper>
      <SDatePicker
        showTimeSelect
        placeholderText="YYYY.MM.DD  YY:MM"
        dateFormat="yyyy/MM/dd h:mm aa"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        timeClassName={handleColor}
      />
      <Between>~</Between>
      <SDatePicker
        showTimeSelect
        placeholderText="YYYY.MM.DD  YY:MM"
        dateFormat="yyyy/MM/dd h:mm aa"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        timeClassName={handleColor}
      />
    </DateRangeWrapper>
  );
};

export default DateRange;

const DateRangeWrapper = styled.div`
  width: 300px;
  display: flex;
  margin: 10px 25px;
`;

const SDatePicker = styled(DatePicker)`
  width: 160px;
  height: 40px;
  text-align: center;
`;

const Between = styled.span`
  line-height: 40px;
`;
