import React from 'react';
import ListChild from './ListChild';
// import Modal from './Modal';

function List() {
  const dataArr = [
    {
      title: '리액트 공부하기',
      detail: 'state 사용법 익히기',
    },
    {
      title: '코테 문제 풀기',
      detail: 'Lv 0 정복 가즈아',
    },
  ];
  // return (
  //   <div>
  //     <h1>오늘 해야할일</h1>
  //     <hr />
  //     {/* map 은 반복문 같은거다.
  //     한줄 실행시 return과 중괄호 생략 가능*/}
  //     {dataArr.map((el, index) => (
  //       <ListChild title={el.title} detail={el.detail} key={index} />
  //     ))}
  //   </div>
  // );
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      {/* 하나의 div 또한 return 생략 가능 */}
      {dataArr.map((el, index) => (
        <div key={index}>
          <h2>{el.title}</h2>
          <p>{el.detail}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
export default List;

// export default function List() {
//   return (
//     <>
//       <h1>오늘 해야할 일 목록</h1>
//       <Modal />
//       <ListChild title="리액트 공부하기" content="State 정복하기" />
//       <ListChild title="코테문제 풀기" content="LV 0 정복하기" />
//       <Modal />
//       {/* <div className="modal">
//         <h2>오늘 해야할 일 2개</h2>
//         <h2>오늘 완료한 일 0개</h2>
//       </div> */}
//     </>
//   );
// }
