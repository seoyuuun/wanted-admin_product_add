import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const SingleDate = () => {
  const [startDate, setStartDate] = useState();

  let handleColor = (time) => {
    return time.getHours() > 12 ? 'text-success' : 'text-error';
  };

  return (
    <SDatePicker
      showTimeSelect
      placeholderText="YYYY.MM.DD  YY:MM"
      dateFormat="yyyy/MM/dd h:mm aa"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeClassName={handleColor}
      minDate={new Date()}
    />
  );
};

export default SingleDate;

const SDatePicker = styled(DatePicker)`
  width: 160px;
  height: 40px;
  text-align: center;
`;
