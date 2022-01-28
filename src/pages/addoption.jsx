import Contentwrap from 'components/layout/Contentwrap';
import styled from 'styled-components';
import { Mainoption } from 'components/productoption';
import { PALLETS } from 'style/theme';

const Addoption = () => {
  return (
    <Contentwrap title="상품 옵션">
      <Contentwrap.Main>
        <Wrap>
          <Mainoption />
        </Wrap>
      </Contentwrap.Main>
    </Contentwrap>
  );
};

export default Addoption;

const Wrap = styled.section`
  background: ${PALLETS.LIGHTGRAY};
  padding: 20px;
`;
