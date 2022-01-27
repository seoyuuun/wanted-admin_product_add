import React, { useState } from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';

const Sidebar = styled.div`
  display: flex;
  color: #2c2c2c;
  border-top: 2px solid ${PALLETS.lightgray};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  &:hover {
    background: ${PALLETS.lightgray};
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
`;

const DropdownMenu = styled.span`
  background: rgb(243, 243, 243);
  height: 40px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${PALLETS.gray};

  &:hover {
    background: ${PALLETS.lightpurple};
    color: ${PALLETS.purple};
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Sidebar to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Sidebar>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownMenu to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownMenu>
          );
        })}
    </>
  );
};

export default SubMenu;
