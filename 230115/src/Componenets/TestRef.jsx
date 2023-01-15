import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('반갑습니다');

  const inputValue = useRef();
  const onChangeText = () => {
    console.log(inputValue);
    setText(inputValue.current.value);
  };
  //   const onChangeText = (e) => {
  //     const inputText = e.target.value;
  //     setText(inputText);
  //   };
  return (
    <>
      <h1> {text} </h1>

      <input
        ref={inputValue}
        onChange={onChangeText}
        // onChange={(e) => {
        //   onChangeText(e);
        // }}
      />
    </>
  );
}
