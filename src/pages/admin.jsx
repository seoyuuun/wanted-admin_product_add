import styled from "styled-components";
import Addoption from "./addoption";
import BuyerRecmmend from "./buyerRecmmend";
import ProductInfoImg from "./productInfoImg";
import Productorder from "./productorder";
import SY from "./sy";

const Admin = () => {
  return (
    <Wrap>
      <Addoption></Addoption>
      <SY />
      <Productorder />
      <ProductInfoImg />
      <BuyerRecmmend />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
