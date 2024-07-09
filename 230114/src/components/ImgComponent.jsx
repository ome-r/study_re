import React from 'react';
import logo from '../logo.svg';

export default function ImgComponent() {
  return (
    <div style={{ width: '300px' }}>
      <img src={logo} alt="로고"></img>
    </div>
  );
}
