import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  return (
    <>
      <h1>오늘 해야할 일 목록</h1>
      <Modal />
      <ListChild title="리액트 공부하기" content="State 정복하기" />
      <ListChild title="코테문제 풀기" content="LV 0 정복하기" />
      <Modal />
      {/* <div className="modal">
        <h2>오늘 해야할 일 2개</h2>
        <h2>오늘 완료한 일 0개</h2>
      </div> */}
    </>
  );
}
