import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import { Input, Button } from 'components/common';

export const Suboption = () => {
  return (
    <Subwrap>
      <Subarrow>&#10551;</Subarrow>
      <Input placeholder={'추가 옵션명 (필수)'} />
      <Input placeholder={'추가옵션 정상가 (필수)'} desc={'원'} />
      <Button
        text={'삭제'}
        width={'50px'}
        bdcolor={`${PALLETS.RED}`}
        ftcolor={`${PALLETS.RED}`}
      />
    </Subwrap>
  );
};
const Subwrap = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Subarrow = styled.span`
  font-size: 30px;
`;
