import React,{ useCallback, useEffect, useRef, useState }  from 'react';
import styled from 'styled-components';
import {PALLETS} from 'style/theme';

const InsertImage = ({ width, radius, text, inputId, isMultiple }) => {
  const [imageNames, setImageNames] = useState([]);
  const [isInserted, setIsInserted] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const inputValue = useRef(null);

  const uploadImage = useCallback((e) => {
      const insertedImageName = e.target.files[0].name;
      setIsShow(true);
      setIsInserted(true);
      if (isMultiple)
        setImageNames([...imageNames, insertedImageName]);
      else setImageNames(insertedImageName);
    },
    [imageNames, isMultiple]
  );

  const onClickRemoveButton = (e) => {
    inputValue.current.value = '';
    setIsShow(false);
    isMultiple &&
      setImageNames(
        imageNames.filter((name) => name !== e.target.value)
      );
  };

  useEffect(() => {
    console.log(imageNames);
  }, [imageNames]);

  return (
    <InsertImageContainer>
      <InsertImageBtn width={width} borderRadius={radius} htmlFor={inputId}><p>{text}</p></InsertImageBtn>
      {isMultiple ? (
        <Input
          ref={inputValue}
          type="file"
          id={inputId}
          accept="image/*"
          onChange={uploadImage}
          multiple
        />
      ) : (
        <Input
          ref={inputValue}
          type="file"
          id={inputId}
          accept="image/*"
          onChange={uploadImage}
        />
      )}
      {isInserted && (
        <ImageNameContainer>
          {isMultiple ? ( imageNames.map((el, index) => {
              return (
                <div key={`${index}`}>
                  <ImageName>{el}</ImageName>
                  <RemoveImageBtn onClick={onClickRemoveButton} value={el}>
                    X
                  </RemoveImageBtn>
                </div>
              );
            })
          ) : (
            <>
              {isShow && (
                <>
                  <ImageName>{imageNames}</ImageName>
                  <RemoveImageBtn value={imageNames} onClick={onClickRemoveButton}>
                    X
                  </RemoveImageBtn>
                </>)}
            </>
          )}
        </ImageNameContainer>
      )}
    </InsertImageContainer>
  );
};

export default InsertImage;

const InsertImageContainer = styled.div`
  display: flex;
  align-items: start;
  padding: 20px;
`;

const InsertImageBtn = styled.label`
  width: ${(props)=> props.width || '150px'};
  height: 40px;
  border-radius: ${(props)=>props.borderRadius || 'none'};
  text-align: center;
  background-color: ${PALLETS.WHITE};
  border: 2px solid ${PALLETS.PURPLE};
  p{
      font-size: 15px;
      margin: 10px 0;
  }
`;

const Input = styled.input`
  display: none;
`;

const ImageName = styled.span`
  display: inline-block;
  margin: 10px 20px;
`;

const ImageNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RemoveImageBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${PALLETS.WHITE};
  border: 1px solid ${PALLETS.NAVY};
`;
