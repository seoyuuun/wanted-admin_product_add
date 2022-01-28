import React from 'react';
import 'App.css';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import { PALLETS } from 'style/theme';
import SubMenu from './SubMenu';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <Logo>Sir.Loin</Logo>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.nav`
  background: white;
  border: 2px solid ${PALLETS.LIGHTGRAY};
  font-size: 16px;
  font-weight: 600;
  color: ${PALLETS.DARKGRAY};
  width: 250px;
  height: 100vh;
  position: sticky;
  top: 0px;
  z-index: 10;
`;

const SidebarMenu = styled.nav`
  list-style: none;
  width: 100%;
  height: 50px
  padding-left: 20px;

`;

const Logo = styled.nav`
  width: 250px;
  height: 50px;
  color: ${PALLETS.PURPLE};
  line-height: 50px;
  font-weight: bold;
  padding-left: 25px;
  font-size: 22px;
`;
