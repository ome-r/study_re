import React from 'react';

export default function CustomObj(props) {
  const { name, age, nickName } = props.obj;
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h2>나이 : {age}</h2>
      <h3>별명 : {nickName}</h3>
    </div>
  );
}
