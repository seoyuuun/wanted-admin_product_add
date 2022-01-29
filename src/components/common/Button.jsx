import styled from "styled-components";
import { PALLETS } from "style/theme";
import { forwardRef } from "react";

export const Button = forwardRef(
  (
    { width, type = "button", text, bdcolor, bgcolor, ftcolor, ...props },
    ref
  ) => {
    return (
      <Container
        type={type}
        ref={ref}
        width={width}
        bd={bdcolor}
        bg={bgcolor}
        ft={ftcolor}
        {...props}
      >
        {text}
      </Container>
    );
  }
);

const Container = styled.button`
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${PALLETS.GRAY};
  flex-shrink: 0;
  border-radius: 8px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: ${(props) => props.ft || `${PALLETS.BLACK}`};
  border-color: ${(props) => props.bd || `${PALLETS.BLACK}`};
  background-color: ${(props) => props.bg || `${PALLETS.WHITE}`};
`;
