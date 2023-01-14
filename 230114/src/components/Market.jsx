import React from 'react';

export default function Market({ item, price }) {
  return (
    <>
      <h1>품목명 {item}</h1>
      <p>가격 {price}</p>
    </>
  );
}
