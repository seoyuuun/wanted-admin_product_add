import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 53.5px;
  border: 2px solid ${PALLETS.LIGHTGRAY};
  color: ${PALLETS.BLACK};
  line-height: 50px;
  padding-left: 280px;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <span>상품등록</span>
    </NavbarWrapper>
  );
};

export default Navbar;
