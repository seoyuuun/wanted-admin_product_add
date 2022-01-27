import React, { useState } from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';

const Sidebar = styled.div`
  display: flex;
  color: #2c2c2c;
  border: 2px solid ${PALLETS.lightgray};
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: ${PALLETS.lightgray};
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
          <div>{item.title}</div>
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
            <div to={item.path} key={index}>
              <div>{item.title}</div>
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
