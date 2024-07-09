import { useState } from 'react';
import './App.css';
import ChangeObj from './components/ChangeObj';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import Items from './components/Items';
// import Emoji from './components/Emoji';
import List from './components/List';
// import SetState from './components/SetState';
// import BtnToNaver from './components/BtnToNaver';
// import ImgComponent from './components/ImgComponent';
// import MainHeader from './components/MainHeader';
// import log from './logo.svg';
// import List from './components/List';
// import MainHeader from './components/MainHeader';

function App() {
  // const [condition, setCondition] = useState(true);
  // const nameArr = ['뽀로로', '루피', '크롱이'];
  // const pororoObj = {
  //   name: '뽀로로',
  //   age: '5',
  //   nickName: '사고뭉치',
  // };
  const pororoObjArr = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치',
    },
    {
      name: '루피',
      age: '4',
      nickName: '공주님',
    },
    {
      name: '크롱이',
      age: '5',
      nickName: '장난꾸러기',
    },
  ];
  return (
    <div className="App">
      <ChangeObj objArr={pororoObjArr} />
      {/* <CustomObj obj={pororoObj} /> */}

      {/* <CustomList arr={nameArr} /> */}

      {/* <Items /> */}
      {/* <List /> */}
      {/* <SetState /> */}
      {/* <Emoji /> */}
      {/* <button onClick={() => setCondition(!condition)}>컨디션 변경</button>{' '}
      <br />
      <span style={{ fontSize: '100px' }}>{condition ? '🆗' : '🚩'}</span> */}
    </div>
  );
}
export default App;

// function App() {
// const str = 'Hello, JSX!';
// const fontStyle = { fontSize: '32px' };
// return (
<>
  {/* <ImgComponent />
      <BtnToNaver /> */}
  {/* <h1>인라인</h1> */}
  {/* <img src={log} alt="이미지"></img> */}
  {/* {str} */}
  {/* <List /> */}
  {/* <MainHeader text="Hello, World!" href="http://naver.com" userID="tetz" /> */}
  {/* <MainHeader text="Hello, World!" />
      <MainHeader text="Hello, World!" /> */}
</>;
//   );
// }

// export default App;
