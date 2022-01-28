import React from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
const Radio = ({ content, select, onChangeValue, ...props }) => {
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          value={content}
          checked={content === select}
          onChange={(event) => onChangeValue(event)}
          {...props}
        />
        <RadioButtonLabel />
        <div>{content}</div>
      </Item>
    </Wrapper>
  );
};

export default Radio;

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 0px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 8px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: ${PALLETS.GRAY};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 17px;
      height: 17px;
      margin: 2.5px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #white;
     border: 1px solid #white;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 17px;
        height: 17px;
        margin: 2.5px;
        background: ${PALLETS.NAVY};
      }
    }
  `}
`;
