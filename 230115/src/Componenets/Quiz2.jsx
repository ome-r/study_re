import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Quiz2() {
  //초기화를 위한 함수 : 초깃값을 false
  const [start, setStart] = useState(false);

  const inputValue = useRef();

  const firstNum = Math.floor(Math.random() * 10);
  const secondNum = Math.floor(Math.random() * 10);

  const mathArr = ['+', '-', '*'];
  const mathArrIndex = Math.floor(Math.random() * 3);

  let answer = 0;
  if (mathArrIndex === 0) {
    answer = firstNum + secondNum;
  } else if (mathArrIndex === 1) {
    answer = firstNum - secondNum;
  } else {
    answer = firstRandomNum * secondRandomNum;
  }

  const CheckAnswer = () => {
    if (answer === Number(inputValue.current.value)) {
      alert('정답입니다! 또 푸세요');
      inputValue.current.value = '';
      inputValue.current.focus();

      setStart(!start);
    } else {
      alert('오답입니다! 화이팅');
      inputValue.current.value = '';
      inputValue.current.focus();

      setStart(!start);
    }
  };

  return (
    <>
      <h1>
        {firstNum} {mathArr[mathArrIndex]} {secondNum}
      </h1>
      <input ref={inputValue} />
      <button onClick={CheckAnswer}>정답 제출!</button>
    </>
  );
}
