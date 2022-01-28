import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import Toggle from 'components/common/Toggle';
import SingleDate from 'components/common/datepicker/SingleDate';
import DateRange from 'components/common/datepicker/DateRange';

const PreOrderReservetionSet = () => {
  return (
    <Wrapper>
      <SideTitle>
        <div>선 주문</div>
        <br />
        <div>예약 배송</div>
      </SideTitle>
      <SetWrapper>
        <Toggle />
        <OrderTimeSet>
          <div>주문 시간</div>
          <DateRange />
        </OrderTimeSet>
        <ReservationDelivery>
          <DeliveryOption>
            <OptionTitle>새벽 배송</OptionTitle>
            <SingleDate />
          </DeliveryOption>
          <DeliveryOption>
            <OptionTitle>일반 배송</OptionTitle>
            <SingleDate />
          </DeliveryOption>
        </ReservationDelivery>
      </SetWrapper>
    </Wrapper>
  );
};

export default PreOrderReservetionSet;

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${PALLETS.GRAY};
`;

const SideTitle = styled.div`
  min-width: 180px;
  font-size: 14px;
  font-weight: 600;
  padding: 50px 20px 0;
  color: ${PALLETS.BLACK};
  background: ${PALLETS.LIGHTGRAY};
`;

const SetWrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
`;

const OrderTimeSet = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ReservationDelivery = styled.div`
  display: flex;
  //   justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const DeliveryOption = styled.div`
  display: flex;
  //   justify-content: space-between;
  align-items: center;
`;

const OptionTitle = styled.div`
  width: 140px;
`;
