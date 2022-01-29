# 상품 등록 관리 페이지

## 프로젝트 소개

상품 등록 어드민 페이지

## 팀원 소개

🏃 [민지연](https://github.com/ichbinmin2)<br/>
🏃‍ [박서윤](https://github.com/seoyuuun)<br/>
🏃‍ [양다혜](https://github.com/dahye-program)<br/>
🏃‍ [박서영](https://github.com/ongddree) (팀장)

## 배포 주소

https://brave-visvesvaraya-053de0.netlify.app/

## 과제 구현 목록

### 1 노출 및 판매 기간 설정 (박서윤)

### 2. 상품 등록 (양다혜)

### 3. 상품 옵션 (박서영)

### 4. 상품 정보 고시 (박서윤)

☑️ currencylayer API 데이터를 실시간으로 활용

<br/>

## 기능별 영상

### 1 노출 및 판매 기간 설정 (박서윤)

### 2. 상품 등록 (양다혜)

### 3. 상품 옵션 (박서영)

### 4. 상품 정보 고시 (박서윤)

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
