import React from 'react';
import { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef();
  const input2 = useRef();

  const changeFocusOne = () => {
    input1.current.focus();
  };
  const changeFocusTwo = () => {
    input2.current.focus();
  };

  return (
    <>
      <input ref={input1}></input>
      <input ref={input2}></input>
      <br></br>
      <button onClick={changeFocusOne}>1</button>
      <button onClick={changeFocusTwo}>2</button>{' '}
    </>
  );
}
