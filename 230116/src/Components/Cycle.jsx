import React from 'react';

export default function Cycle() {
  //useEffect는 콜백함수를 인자로 받거나
  //콜백함수 그리고 배열을 인자로 받는 두가지 경우가 존재.
  // useEfect(()=>{},[]) 처럼 빈 배열이 들어오는 경우에는 첫 화면 렌더링만 실행

  //정리를 위해서 필요한 Clean Up 코드!
  // useEffect 내부에 return함수
  // useEffect(()=>{ 타이머 시작하기
  //     return()=> { 타이머 멈추기}
  // }, [])
  return <div>Cycle</div>;
}
