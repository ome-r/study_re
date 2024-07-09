import { useRef, useState } from 'react';
const Comparing = () => {
  const [countState, setState] = useState(0);
  //  렌더링 버튼
  const [render, setRender] = useState(0);
  const countRef = useRef(0);

  let countVar = 0;
  const countUpState = () => {
    setState(countState + 1);
    console.log('State: ', countState);
  };

  const countUpRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current);
  };

  const countUpVar = () => {
    countVar = countVar + 1;
    console.log('Variable: ', countVar);
  };

  const reRender = () => {
    setRender(render + 1);
  };

  return (
    <>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variable: {countVar}</h1>
      <button onClick={countUpState}>State UP!</button>
      <button onClick={countUpRef}>Ref UP!</button>
      <button onClick={countUpVar}>Variable UP!</button>
      <button onClick={reRender}>렌더링!</button>
    </>
  );
};
export default Comparing;
