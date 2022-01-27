import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';

const NavbarWrapper = styled.nav`
  width: 100%;
  height: 54px;
  border: 2px solid red;
  color: ${PALLETS.lightgray};
  line-height: 50px;
  font-weight: bold;
  padding-left: 25px;
  font-size: 22px;
`;

const Navbar = () => {
  return <NavbarWrapper>nav</NavbarWrapper>;
};

export default Navbar;
