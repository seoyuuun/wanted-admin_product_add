import styled from 'styled-components';
import { PALLETS } from 'style/theme';

const Contentwrap = ({ title, children }) => {
  return (
    <Sectionwrap>
      <Sectiontit>{title}</Sectiontit>
      {children}
    </Sectionwrap>
  );
};

export default Contentwrap;

const Sectionwrap = styled.section`
  border: 1px solid ${PALLETS.GRAY};
`;

const Sectiontit = styled.h3`
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  color: ${PALLETS.BLACK};
  border-bottom: 1px solid ${PALLETS.GRAY};
`;

Contentwrap.Main = styled.section`
  font-size: 15px;
  background: ${PALLETS.WHITE};
`;
