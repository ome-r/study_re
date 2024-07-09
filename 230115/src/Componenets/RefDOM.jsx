import React from 'react';
import { useRef } from 'react';

export default function RefDOM() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    skyblueEl.current.style.backgroundColor = 'skyblue';
  };

  const clearInput = () => {
    inputEl.current.value = '';
  };
  return (
    <>
      <h1 ref={orangeEl}>오렌쥐</h1>
      <h2 ref={skyblueEl}>스카이블루</h2>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={adjustCSS}>CSS</button>
      <button onClick={clearInput}>초기화버튼</button>
    </>
  );
}
