import styled from 'styled-components';
import ExpoSalesPeriodSet from './ExpoSalesPeriodSet';
import Addoption from './addoption';
import PagesInfoNotice from './pagesInfoNotice';
import Productorder from './productorder';
import ProductInfo from './productInfo';

const Admin = () => {
  return (
    <Wrap>
      <ExpoSalesPeriodSet />
      <Addoption />
      <ProductInfo />
      <Productorder />
      <PagesInfoNotice />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
