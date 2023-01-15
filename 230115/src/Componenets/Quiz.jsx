import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Quiz() {
  const firstRandomNum = Math.floor(Math.random() * 10);
  const secondRandomNum = Math.floor(Math.random() * 10);

  const arithMeticArr = ['+', '-', '*'];
  // 0부터 2까지 나오는 숫자
  const arithMetic = Math.floor(Math.random() * 3);

  //   랜덤값
  let answer = 0;

  if (arithMetic === 0) {
    answer = firstRandomNum + secondRandomNum;
  } else if (arithMetic === 1) {
    answer = firstRandomNum - secondRandomNum;
  } else {
    answer = firstRandomNum * secondRandomNum;
  }
  // 훅 사용하기
  const answerInput = useRef();
  //리렌더링만 해주는 스테이트함수
  const [again, setAgain] = useState(false);

  //  정답체크 함수
  const checkAnswer = () => {
    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다!');
      // 인풋창 비우기, 포커싱하기
      answerInput.current.value = '';
      answerInput.current.focus();
      // state 새로고침
      setAgain(!again);
    } else {
      alert('오답입니다! 다시 입력해주세요');
      // 인풋창 비우기, 포커싱하기
      answerInput.current.value = '';
      answerInput.current.focus();
      // state 새로고침
      setAgain(!again);
    }
  };

  //  그림요소
  return (
    <div>
      <h1>
        {' '}
        {firstRandomNum} {arithMeticArr[arithMetic]} {secondRandomNum}
      </h1>
      <input ref={answerInput} />
      <button onClick={checkAnswer}>정답제출</button>
    </div>
  );
}
