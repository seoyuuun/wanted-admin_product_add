import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {PALLETS} from 'style/theme';

const InsertImagePreview = ( {width} ) => {
  const [PreviewSrc, setPreviewSrc] = useState('');
  const inputValue = useRef(null);

  const uploadPreview = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPreviewSrc(reader.result);
        resolve();
      };
    });
  };

  const onClickRemove = () => {
    inputValue.current.value = '';
    setPreviewSrc('');
  };
  
  useEffect(() => {
    console.log(PreviewSrc);
  }, [PreviewSrc]);

  return (
    <InsertImagePreviewContainer width={width}>
      <InsertImagePreviewBtn htmlFor="img"> + 이미지 첨부</InsertImagePreviewBtn>
      <Input 
        ref={inputValue} 
        type="file" 
        id="img" 
        accept="image/*"
        onChange={uploadPreview} 
      />
      {PreviewSrc && (
        <>
          <ImagePreview src={PreviewSrc} />
          <RemovePreviewBtn onClick={onClickRemove}>
            X
          </RemovePreviewBtn>
        </>
      )}
    </InsertImagePreviewContainer>
  );
};

export default InsertImagePreview;

const InsertImagePreviewContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '100%'};
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${PALLETS.LIGHTGRAY};
  border: 0.5px solid ${PALLETS.LIGHTGRAY};
`;

const InsertImagePreviewBtn = styled.label`
  width: 180px;
  border-radius: 4px;
  text-align: center;  
  padding: 10px;
  background-color: ${PALLETS.LIGHTGRAY};
  border: 1.5px solid ${PALLETS.PURPLE};
`;

const Input = styled.input`
  display: none;
`;

const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemovePreviewBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${PALLETS.WHITE};
  border: 1px solid ${PALLETS.NAVY};
`;