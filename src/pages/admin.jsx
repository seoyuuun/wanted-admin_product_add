import styled from 'styled-components';
import Addoption from './addoption';

const Admin = () => {
  return (
    <Wrap>
      <Addoption></Addoption>
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
