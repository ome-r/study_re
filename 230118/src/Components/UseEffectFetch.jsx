import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

// 이안에서 컴포넌트 최초마운트 -> 서버로부터 데이터 요청 -> 데이터를 state에 등록 -> 해당내용렌더링
export default function UseEffectFetch() {
  // []이 초깃값인 이유는 dataArr 이후에 setDataArr에서 들어올 값이 객체(resFetch.data)라서 ?
  const [dataArr, setDataArr] = useState([]); //dataArr를 []로 설정 -> 앞으로 주솟값을 집어넣는 변수로 만들겠다

  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000/');
    if (resFetch.status !== 200) return alert('통신 에러');
    const data = resFetch.data; //객체(resFetch.data)타입이다 {어쩌구}

    setDataArr(data);
    console.log(data);
  }
  //   useEffect 는 리턴을 먼저 그려놓고 실행 , 빈배열[]을 넣어야 무한렌더링을 막을 수 있다
  useEffect(() => {
    fetchData();
  }, []);

  //위의 useEffect보다 얘네가 먼저 실행
  return (
    <>
      {dataArr.map((el, index) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={index}
          />
        );
      })}
    </>
  );
}
