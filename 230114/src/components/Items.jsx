import React from 'react';
import Market from './Market';

export default function Items() {
  const items = [
    {
      item: 'PS5',
      price: '685,000원',
    },
    {
      item: '에어 프라이어',
      price: '50,000원',
    },
    {
      item: '사세 치킨윙',
      price: '11,500원',
    },
  ];
  return (
    <>
      {/* {items.map((el, item) => {
        return <Market item={el.item} price={el.price} key={item} />;
      })} */}
      {items.map((el, item) => {
        return (
          <div key={item}>
            <h2>품목명 : {el.item}</h2>
            <p>가격 : {el.price}</p>
          </div>
        );
      })}
    </>
  );
}
