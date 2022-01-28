import styled from 'styled-components';
import Addoption from './addoption';
import SY from './sy';

const Admin = () => {
  return (
    <Wrap>
      <Addoption></Addoption>
      <SY />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
