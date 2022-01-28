import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';

const SubMenu = ({ item }) => {
  return (
    <>
      <Sidebar to={item.path}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </Sidebar>
      {item.subNav &&
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

const Sidebar = styled.div`
  display: flex;
  color: #2c2c2c;
  border-top: 2px solid ${PALLETS.LIGHTGRAY};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  &:hover {
    background: ${PALLETS.LIGHTGRAY};
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
  color: ${PALLETS.BLACK};

  &:hover {
    background: ${PALLETS.LIGHTPURPLE};
    color: ${PALLETS.PURPLE};
    cursor: pointer;
  }
`;
