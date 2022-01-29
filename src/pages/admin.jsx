import styled from "styled-components";
import Addoption from "./addoption";
import PagesInfoNotice from "./pagesInfoNotice";
import Productorder from "./productorder";
import SY from "./sy";
import ProductInfo  from "./productInfo";

const Admin = () => {
  return (
    <Wrap>
      <Addoption></Addoption>
      <SY />
      <ProductInfo/>
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
