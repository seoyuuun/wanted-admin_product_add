# 상품 등록 관리 페이지

## 프로젝트 소개

상품 등록 어드민 페이지

## 팀원 소개

🏃 [민지연](https://github.com/ichbinmin2)<br/>
🏃‍ [박서윤](https://github.com/seoyuuun)<br/>
🏃‍ [양다혜](https://github.com/dahye-program)<br/>
🏃‍ [박서영](https://github.com/ongddree) (팀장)

## 배포 주소

[배포 사이트 바로가기](https://brave-visvesvaraya-053de0.netlify.app/)

## 과제 구현 목록

### 1 노출 및 판매 기간 설정 (박서윤)

☑️ 제한 없음을 default값으로 지정

☑️ 설정한 노출기간이 만료된 경우, 자동으로 '미노출' 상태로 변경

☑️ 달력 및 시간 지정 컴포넌트 제공

☑️ 30분 단위로 시간 지정

☑️ 현재 시간을 기준으로 지난 시간으로 startDate 설정 제한

☑️ 기간 시작 시간을 기준으로 그 이전의 시간으로 endDate 설정 제한

### 2. 상품 등록 (양다혜)

☑️ 카테고리 목록에서 제공된 카테고리 생성

☑️ 상품명, 상품 코드, 상품 구성 소개 정보 입력

☑️ 상품 썸네일 이미지 선택(이미지는 1개만 선택 가능)

☑️ 상품 대표 이미지 선택(여러장 선택 가능)

☑️ 이미지 파일명 출력 및 선택 삭제

### 3. 상품 옵션 (박서영)

☑️ 옵션은 옵션 세트 추가를 통해 등록할 수 있음

☑️ 옵션 세트 및 옵션 세트 내 옵션은 여러 개 생성할 수 있음

☑️ 옵션 세트 내 이미지는 1개만 지정 가능하며, 옵션은 여러 개 생성할 수 있음

☑️ 관리자는 해당 옵션에 추가 옵션 상품을 등록할 수 있음

☑️ 옵션 1개당 여러개의 추가 옵션 상품을 등록할 수 있음

☑️ [추가 옵션 상품 등록] 버튼 TAP 시, 추가옵션 등록 SELL 추가됨

☑️ 상품 정상가 : 상품의 정상가를 입력할 수 있음

☑️ 상품 판매가 : 상품의 판매가를 입력할 수 있음

### 4. 상품소개 이미지, 구매자 추천 이미지 섹션, 상품 정보 고시 (민지연)

☑️ 정보고시 form이 추가될때마다 정보고시 생성 순서 숫자 count로 관리(default 값은 1)

☑️ mock data로 title, placeholder 관리

☑️ 정보고시 form 추가 기능, 추가 될 때마다 생성 순서 숫자 count +1

☑️ 정보고시 form 삭제 기능, 삭제 될 때마다 생성 순서 숫자 count -1

☑️ 고정된 title의 input값 실시간으로 form data로 output

☑️ [항목 추가 버튼]을 누르면 [항목 옵션]이 추가되고 '타이틀' 및 '내용' 입력 가능

☑️ [항복 삭제 버튼]을 누르면 [항목 옵션] 삭제 가능

☑️ 정보고시 내 입력된 모든 값(항목추가옵션 포함)은 form으로 실시간 업데이트 가능

![상품 정보 고시 입력 값 예시](https://user-images.githubusercontent.com/53133662/151653704-f3c48d94-53de-405a-b74c-9b9f23f5c48c.png)

```
[
	{
	"count":1,
	"name":"제품명 내용",
	"origin":"원산지 내용",
	"ranking":"등급 내용",
	"keep":"보관 내용",
	"type":"식품 유형 내용",
	"추가항목제목1":"추가항목내용1",
	"추가항목제목2":"추가항목내용2"
	}
]

```

### 공통 컴포넌트

#### 민지연

☑️ Radio

- 사용하고자 하는 컴포넌트에 content, select, onChange를 받아 onChange로 event가 실행되면 select가 되도록 기능 

- '제한 없음'을 default값으로 지정하여 자동으로 select 값 유지

☑️ Toggle 

- boolean state 값을 받아 true, false로 state를 관리되도록 기능

<br/>

#### 박서영

☑️ Contentwrap : 기능별 섹션 레이아웃

☑️ Button : font-color, background, border, text 등 인자를 받아 커스텀할 수 있는 버튼 컴포넌트

☑️ Input : width, text, desc 등 인자를 받아 커스텀할 수 있는 Input 컴포넌트

<br/>

#### 양다혜

☑️ InsertImage : 이미지 첨부 컴포넌트(isMultiple값의 true, false로 하나의 사진 또는 여러개의 사진을 구분, 이미지 선택 시 우측에 파일명 출력되고 배열에 저장, X버튼 클릭시 삭제)

☑️ InsertImagePreview : 이미지 프리뷰 컴포넌트(이미지 선택시 미리보기로 이미지 출력, X버튼 클릭시 삭제, 파일명과 src값 저장)


## 기능별 영상

### 1 노출 및 판매 기간 설정 (박서윤)<br/>

![ezgif com-gif-maker](https://user-images.githubusercontent.com/84560867/151652562-43658a25-5ff8-40a4-bf59-bcde24ab04c2.gif)

### 2. 상품 등록 (양다혜)

- ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/58350897/151654105-50f25d74-c3dd-42fd-ae02-aa17e0414743.gif)

### 3. 상품 옵션 (박서영)

- 옵션 세트 추가 <br/> <br/>
  ![옵션세트추가](https://user-images.githubusercontent.com/93420227/151652844-b57c1b8a-1bdf-405a-977d-3b7f7e4b7b90.gif)
- 옵션 세트 내 옵션 추가 <br/> <br/>
  ![옵션세트내옵션추가](https://user-images.githubusercontent.com/93420227/151652835-69846b15-8f79-4461-a56c-4ffb39dcbc50.gif)
- 추가 옵션 추가 <br/> <br/>
  ![추가옵션등록](https://user-images.githubusercontent.com/93420227/151652854-8cda92c2-0287-4e81-bf09-795a90e400d9.gif)
- 이미지 프리뷰 첨부 <br/> <br/>
  ![이미지첨부](https://user-images.githubusercontent.com/93420227/151652847-52a1969d-4eae-48d3-9679-2fbc334518a8.gif)

### 4. 상품 정보 고시 (민지연)

- 상품 정보 고시 (전체 form 추가/삭제, 정보고시 생성 순서 숫자 표기)  <br/> <br/>
 ![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/53133662/151654179-7e4c0d5b-0a90-4ea5-8bc9-cc590c8eb54b.gif)
- 상품 정보 고시 (input 입력값 받기)  <br/> <br/>
  ![ezgif com-gif-maker (7)](https://user-images.githubusercontent.com/53133662/151654177-19bfd785-c0f8-41a2-ae85-d5a7f01424c8.gif)
- 상품 정보 고시 (항목 옵션 추가/삭제)  <br/> <br/>
  ![ezgif com-gif-maker (8)](https://user-images.githubusercontent.com/53133662/151654174-ea538855-2522-46fc-af51-e1ce68782f4e.gif)
- 상품옵션 toggle <br/> <br/>
  ![상품 옵션 toggle](https://user-images.githubusercontent.com/53133662/151653417-d94492b6-d325-4d99-9d84-0d93c8828a44.gif)
- 상품소개이미지, 구매자추천이미지 <br/> <br/>
  ![상품소개이미지, 구매자추천이미지](https://user-images.githubusercontent.com/53133662/151653648-6686792f-e4dc-4b70-8db4-47446d48d42f.png)

## 과제 후기

### 🙋‍♀️ 박서윤

원활한 협업을 위해서 환경 셋팅에 들이는 시간을 아까워하지 않아야함을 다시 한번 느낄 수 있었으며, 효율적인 협업을 위한 핵심적인 방법 중 하나는, 충분한 협의를 통해 공통된 모듈을 분리하고, 어떻게 task를 맡을지를 확실히 분담해 중복되는 개발 작업이 이루어지지 않도록 하고, 불필요한 작업 시간을 줄이도록 하는 것임을 체득할 수 있었던 협업 프로젝트였다.
<br/>

### 🙋‍♀️ 양다혜

협업에 익숙치 않았었는데, 소통의 중요성을 느끼며 협업하는 법을 배울 수 있었다. 마음이 급하더라도 초기 세팅과 프로젝트 구조 설계에 충분한 시간을 쓰는 것은 충분히 가치있는 일이라는 것을 경험하였다. 또한 간단하게 보였던 것도 고려할 점이 많고 재사용을 위한 설계가 중요하다는 것을 깨달았다.

### 🙋‍♀️ 박서영

테스크 분석 및 분리, 공용 컴포넌트 제작, 깃헙 이슈를 통한 프로젝트 관리, 데이터 명세 등 사전에 충분한 협의를 통해 체계적으로 계획을 세웠던 프로젝트였다. 불필요하게 낭비되는 코드를 줄이고 건설적으로 코드를 설계할 수 있어서 공부가 많이 되었다.

### 🙋‍♀️ 민지연



## 프로젝트 구조 설명

```bash
.
├── App.css
├── App.js
├── components
│   ├── common
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── InsertImage.jsx
│   │   ├── InsertImagePreview.jsx
│   │   ├── Radio.jsx
│   │   ├── Toggle.jsx
│   │   ├── datepicker
│   │   └── index.js
│   ├── infoNotice
│   │   ├── InfoNotice.jsx
│   │   └── infoNoticeForm
│   ├── layout
│   │   ├── Contentwrap.jsx
│   │   ├── navbar
│   │   └── sidebar
│   ├── productExpoSalesPeriod
│   │   ├── ExposurePeriodSet.jsx
│   │   └── SalesPeriodSet.jsx
│   ├── productInfo
│   │   └── ProductInfo.jsx
│   ├── productOrderSet
│   │   ├── ProductOrderStart.jsx
│   │   └── ProductPickUp.jsx
│   ├── productPreOrderReservation
│   │   └── PreOrderReservetionSet.jsx
│   └── productoption
│       ├── Optionset.jsx
│       ├── Suboption.jsx
│       └── index.js
├── hooks
│   ├── SubmitForm.jsx
│   ├── useForm.js
│   └── validate.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── admin.jsx
│   └── adminSection
│       ├── ExpoSalesPeriodSet.jsx
│       ├── addoption.jsx
│       ├── pagesInfoNotice.jsx
│       ├── productInfo.jsx
│       └── productorder.jsx
└── style
    ├── globalstyle.js
    └── theme.js


```

### 데이터 post 명세

```
{
  "product": {
      "exposuredeadline": String,
      "salesdeadline": String,
      "categories": Array<string>,
      "filtertags": Array<string>,
      "title": String,
      "desc": String,
      "code": String,
      "thumbnamil" : String,
      "representativeimages": Array<string>,
      "stock": Number,
      "option + ${index}": {
              "image": String,
              "optiontit": String,
              "regularprice" : Number,
              "sellingprice" : Number,
              "stock" : String,
              "taxation" : String,
              "addoption + ${index}": {
                  "optiontit" : String,
                  "regularprice" : Number
                  }
        }
      "introimages": Array<string>,
      "recommandedimages": Array<string>,
      "informationnotice" : {
          "productname": String,
          "origin": String,
          "ranking" : String,
          "custody" : String,
          "foodcode" : String,
          "key" : String,
        }
    "deliverydesignation" : String,
    "pickup" : String,
    "preorderdelivery" : String,
    "mileage" : String,
    "thankyoucard" : String
		}
}
```

<br/>

## 설치 및 시작하는 법

**프로젝트 클론**

```
$ git clone https://github.com/On-Basic/ADM_PRODUCT_ADD.git
```

**패키지 설치**

```
$ yarn
```

**서버 실행**

```
$ yarn start
```
