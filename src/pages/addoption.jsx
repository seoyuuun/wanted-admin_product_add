import styled from 'styled-components';
import { Optionset } from 'components/productoption';
import { PALLETS } from 'style/theme';
import { useState, useRef } from 'react';
import { Button } from 'components/common/Button';

const Addoption = () => {
  const [optionSets, setOptionsets] = useState([]);

  const nextId = useRef(0);

  const onSetRemove = (e) => {
    let mainArr = [...optionSets];
    console.log(mainArr);
    setOptionsets(optionSets.filter((list) => list.id !== e));
  };

  const onSetCreate = () => {
    const list = {
      id: nextId.current,
    };
    setOptionsets(optionSets.concat(list));
    nextId.current += 1;
    console.log(optionSets);
  };

  return (
    <Wrap>
      <Header>
        <Title>상품옵션</Title>
        <Button
          text="+ 옵션 세트 추가"
          width={'100px'}
          bdcolor={`${PALLETS.NAVY}`}
          ftcolor={`${PALLETS.NAVY}`}
          onClick={onSetCreate}
        />
      </Header>
      <Main>
        {optionSets.length ? (
          <Optionset optionSets={optionSets} onSetRemove={onSetRemove} />
        ) : (
          <Initialphrase>
            옵션 세트를 추가하여 옵션을 구성해주세요.
          </Initialphrase>
        )}
      </Main>
    </Wrap>
  );
};

export default Addoption;

const Wrap = styled.section`
  border: 1px solid ${PALLETS.GRAY};
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${PALLETS.GRAY};
`;

const Main = styled.section`
  font-size: 15px;
  padding: 20px;
  background: ${PALLETS.LIGHTGRAY};
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  padding: 10px;
  color: ${PALLETS.BLACK};
`;

const Initialphrase = styled.p`
  text-align: center;
  margin: 250px 0;
`;
