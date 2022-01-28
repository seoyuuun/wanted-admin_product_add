import styled from "styled-components";
import PagesInfoNotice from "./pagesInfoNotice";

const Admin = () => {
  return (
    <Wrap>
      <PagesInfoNotice />
    </Wrap>
  );
};

export default Admin;

const Wrap = styled.section`
  margin-left: 250px;
  padding: 15px;
`;
