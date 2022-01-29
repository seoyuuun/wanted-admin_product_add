import styled from 'styled-components';
import Addoption from './addoption';
import PagesInfoNotice from './pagesInfoNotice';
import Productorder from './productorder';
import SY from './sy';
import ProductInfo from './productInfo';
import SubmitForm from 'hooks/SubmitForm';
const Admin = () => {
  return (
    
    <Wrap>
      <SY />
      <ExpoSalesPeriodSet />
      <ProductInfo />
      <Productorder />
      <Addoption />
      <PagesInfoNotice />
      <SubmitForm />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
