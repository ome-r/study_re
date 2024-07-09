import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// createStore 임포트하고,
import { createStore } from 'redux';

let weight = 100; //reducer가 관리할 state값

function reducer(state = weight, action) {
  if (action.type === '증가') {
    state++;
    return state;
  } else if (action.type === '감소') {
    state--;
    return state;
  } else {
    return state;
  }
}
// 스토어 쓰겠다고 선언
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* 실제로 store를 가동! */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
