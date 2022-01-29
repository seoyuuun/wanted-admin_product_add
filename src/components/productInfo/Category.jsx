import React, {useState} from 'react';
import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import { CategoryData } from './CategoryObject';

const Category = () => {
  const [categoryList, setCategoryList] = useState(CategoryData);

  const onChecked = (id) => {
    setCategoryList((el)=>{
      el.map((item)=>
      item.id === id ? {...item, value: !item.value}: item)
    });
  };
  console.log({categoryList});

  const onChange = (id) => {
    onChecked(id);
  }
  const onRemove = (clickedId) => {
    onChecked(clickedId);
  }

  return(
        <CategoryContainer>
        <CategoryListcontent>
        {categoryList.map((el) => (
          <div key={`${el.id}`}>
            <Input
              onChange={() => onChange(el.id)}
              type="checkbox"
              value={el.name}
              checked={el.value}>
            </Input>
            {el.name}
          </div>
        ))}
      </CategoryListcontent>
      <CheckedListContainer>
        {categoryList.map((el) => (
          <div key={`${el.id}`}>
            {el.checked && (
              <CheckedList>
                {el.name}
                <RemoveCheckListBtn onClick={() => onRemove(el.id)}>
                  X
                </RemoveCheckListBtn>
              </CheckedList>
            )}
          </div>
        ))}
      </CheckedListContainer>
      </CategoryContainer>
    );
};

export default Category;

const CategoryContainer = styled.div`
  display: flex;
  height: 300px;
  padding: 15px 10px;
  gap: 30px;
`;

const CategoryListcontent = styled.div`
  width: 600px;
  border-radius: 5px;
  border: 1px solid ${PALLETS.GRAY};
  overflow-y: scroll;
`;

const CheckedList = styled.span`
  display: inline-block;
  width: 200px;
  height: 40px;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  border: 1px solid ${PALLETS.NAVY};
  background-color: ${PALLETS.LIGHTPURPLE};
  padding-top: 8px;
`;

const Input = styled.input`
`;

const CheckedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${PALLETS.GRAY};
  overflow-y: scroll;
`;

const RemoveCheckListBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
`;