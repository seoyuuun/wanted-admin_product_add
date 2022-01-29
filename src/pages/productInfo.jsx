import Contentwrap from 'components/layout/Contentwrap';
import styled from 'styled-components';
import ProductInfo from 'components/productInfo/ProductInfo';

const ProductInfopage = () => {
  return (
    <Wrap>
    <Contentwrap title="상품 기본 정보">
      <Contentwrap.Main>
            <ProductInfo />
      </Contentwrap.Main>
    </Contentwrap>
    </Wrap>
  );
};

export default ProductInfopage;

const Wrap = styled.section`
margin: 30px 0;
`;
