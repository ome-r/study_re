// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Emoji from "./components/Emoji";
// import BtnToNaver from "./components/BtnToNaver";
// import ImgComponent from "./components/ImgComponent";
// import MainHeader from "./components/MainHeader";

function App() {
  // function printConsole() {
  //   console.log("출력하기!");
  // }
  // const helloStr = "Hello, STR!"
  // function MainHeader() {
  //   return <h2>Hello, Component world!</h2>;
  //   };
  //   const [teacher, setTeacher] = useState("쌤");
  //   const [strState, setStrState] = useState("init");
  // // 함수로 상태 변경함수 값 설정
  //   function customSetTeacher(){
  //     setTeacher("SSAM!");}
  // 컨디션 변경!
  // let [condition, setCondition] = useState(true);

  return (
    <div className="App">
      <Emoji />
      {/* <button onClick={()=> setCondition(!condition)}>컨디션 변경</button><br/>
      <span style={{fontSize: "100px"}}>{condition ? "🚀" : "⛵"}</span> */}
      {/* useState */}
      {/* <button onClick={()=> setTeacher("ssam")}> 영어로!</button><br/>
      <span>{teacher}</span> */}
      {/* state 무한 */}
      {/* <button onClick={() => setStrState(strState + "+")}>반복!</button>
      <br />
      <span>{strState}</span> */}
      {/* <button onClick={customSetTeacher}>영어!</button>
  <span>{teacher}</span> */}
      {/* 컴포넌트 다루기 */}
      {/* <ImgComponent/>
      <BtnToNaver/> */}
      {/* <MainHeader /> */}
      {/* 이벤트 핸들러 */}
      {/* <div onClick={()=>{alert("클릭되었습니다!")}}>{helloStr}</div> */}
      {/* <div style={{ marginTop: "32px", backgroundColor: "skyblue" }}>blue</div> */}
      {/* <span onClick={printConsole}>클릭!</span> */}
      {/* <span onClick={()=>{
        let num = 10;
        num+=5;
        console.log(num);
      }}>Click!</span> */}
    </div>
  );
}

export default App;

