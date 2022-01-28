import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const SingleDate = () => {
  const [startDate, setStartDate] = useState();

  return (
    <SDatePicker
      placeholderText="YYYY.MM.DD"
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
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
