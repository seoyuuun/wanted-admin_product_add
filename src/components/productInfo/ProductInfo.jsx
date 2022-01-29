import styled from 'styled-components';
import { PALLETS } from 'style/theme';
import { Input } from 'components/common';
// import Category from './Category';
import InsertImage from 'components/common/InsertImage';

const ProductInfo = () => {
    return(
    <>
    <Field>
    <SideTitle>카테고리</SideTitle>
    <Content>
      {/* <Category /> */}
      </Content>
    </Field>

    <Field>
    <SideTitle>필터 태그</SideTitle>
    <Content />
    </Field>

    <Field>    
    <SideTitle>상품명 *</SideTitle>
    <Content>
      <Input width={'500px'} placeholder={'상품명을 입력해 주세요.'} />
    </Content>
    <SideTitle>상품 코드</SideTitle>
    <Content><span>ESKLFD</span></Content>
    </Field>

    <Field>
    <SideTitle>상품 구성 소개 정보*</SideTitle>
    <Content>
    <Input placeholder={'상품 구성 소개 정보를 입력해 주세요.'} />
    </Content>
    </Field>

    <Field>
    <SideTitle>상품 썸네일</SideTitle>
    <Content>
      <InsertImage width="200px" radius="4px" text="+ 이미지 첨부" inputId="thumbnail" isMultiple="false"/>
    </Content>
    </Field>

    <Field>
    <SideTitle>상품 대표 이미지</SideTitle>
    <Content>
      <InsertImage width="200px" radius="4px" text="+ 이미지 첨부" inputId="representativeimages" isMultiple="true" />
    </Content>
    </Field>

    <Field>
    <SideTitle>상품 총 재고*</SideTitle>
    <Content><span>40 개</span></Content>
    </Field>
    
    </>
    );
};

export default ProductInfo;

const SideTitle = styled.section`
  min-width: 180px;
  height: auto;
  font-size: 14px;
  font-weight: bold;
  border-bottom: 0.2px solid ${PALLETS.GRAY};
  background-color: ${PALLETS.LIGHTGRAY};
  padding: 20px;
`;

const Content = styled.section`
  width: 100%;
  padding: 10px;
  line-height: 20px;
  border-bottom: 0.2px solid ${PALLETS.GRAY};
`;

const Field = styled.section`
  display: flex;
`;