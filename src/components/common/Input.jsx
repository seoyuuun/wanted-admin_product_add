import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import { forwardRef } from 'react';

export const Input = forwardRef(
  ({ width, placeholder, type = 'text', ...props }, ref) => {
    return (
      <Container
        ref={ref}
        type={type}
        width={width}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: no-wrap;
`;

const Inputspace = styled.input`
  width: ${(props) => props.width || '100%'};
  border: 1px solid ${PALLETS.LIGHTGRAY};
  border-radius: 8px;
  padding: 0 15px;
  height: 45px;
  &::placeholder {
    color: ${PALLETS.GRAY};
    font-size: 15px;
  }
`;

const Desc = styled.span`
  display: ${(props) => props.display || 'none'};
  margin-left: 10px;
`;
