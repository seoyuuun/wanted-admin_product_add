import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import { Button } from 'components/common/Button';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <span>상품등록</span>
      <Button
        text={'저장하기'}
        width={'100px'}
        bd={`${PALLETS.LIGHTPURPLE}`}
        ft={`${PALLETS.BLACK}`}
      />
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 53.5px;
  border: 2px solid ${PALLETS.LIGHTGRAY};
  color: ${PALLETS.BLACK};
  line-height: 50px;
  padding-left: 280px;
  padding-right: 20px;
  font-weight: bold;
`;
