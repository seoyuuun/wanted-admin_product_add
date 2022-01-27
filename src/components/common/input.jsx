import styled from "styled-components";
import { PALLETS } from "style/theme";

export const Input = ({ width, placeholder }) => {
  return <Container type="text" width={width} placeholder={placeholder} />;
};

const Container = styled.input`
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${PALLETS.LIGHTGRAY};
  border-radius: 8px;
  padding: 0 15px;
  height: 45px;
  &::placeholder {
    color: ${PALLETS.GRAY};
    font-size: 15px;
  }
`;
