import React, { Component } from 'react';

export default class BtnToNaver extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            location.href = 'http://naver.com';
          }}
        >
          네이버
        </button>
        {/* <a href="http://google.com">Go to Google</a> */}
      </div>
    );
  }
}
