import styled from "styled-components";
import Addoption from "./adminSection/addoption";
import PagesInfoNotice from "./adminSection/pagesInfoNotice";
import Productorder from "./adminSection/productorder";
import ProductInfo from "./adminSection/productInfo";
import ExpoSalesPeriodSet from "./adminSection/ExpoSalesPeriodSet";
import useForm from "hooks/useForm";
import validate from "hooks/validate";
import { Button } from "components/common/Button";
import { PALLETS } from "style/theme";
import ProductInfoImg from "./adminSection/productInfoImg";
import BuyerRecmmend from "./adminSection/buyerRecmmend";

const Admin = () => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: {
      exposuredeadline: "",
      salesdeadline: "",
      categories: [],
      filtertags: [],
      title: "",
      desc: "",
      code: "",
      thumbnamil: "",
      representativeimages: [],
      stock: 0,
      option: {
        image: "",
        optiontit: "",
        regularprice: 0,
        sellingprice: 0,
        stock: "",
        taxation: "",
        addoption: {
          optiontit: "",
          regularprice: 0,
        },
      },
      introimages: [],
      recommandedimages: [],
      informationnotice: {
        productname: "",
        origin: "",
        ranking: "",
        custody: "",
        foodcode: "",
        key: "",
      },
      deliverydesignation: "",
      pickup: "",
      preorderdelivery: "",
      mileage: "",
      thankyoucard: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });
  return (
    <Wrap onSubmit={handleSubmit}>
      <ExpoSalesPeriodSet />
      <ProductInfo />
      <Productorder />
      <ProductInfoImg />
      <BuyerRecmmend />
      <Addoption handleChange={handleChange} values={values} />
      <PagesInfoNotice />
      <Button
        type="submit"
        disabled={submitting}
        text={"상품 등록"}
        width={"200px"}
        bdcolor={`${PALLETS.NAVY}`}
        ftcolor={`${PALLETS.NAVY}`}
      ></Button>
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.form`
  margin-left: 250px;
  padding: 15px;
`;
