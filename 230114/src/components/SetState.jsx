import React from 'react';
import { useState } from 'react';

export default function SetState() {
  //   let [state, setState] = useState([0]);
  //   console.log(state);
  //   return (
  //     <div className="App">
  //       {state}
  //       <br />
  //       <button
  //         onClick={() => {
  //           state[0] = 1;
  //           setState(state);
  //           console.log(state);
  //         }}
  //       >
  //         +1
  //       </button>
  //     </div>
  //   );
  // }

  let [state, setState] = useState({ teacher: '이효석' });
  console.log(state);
  return (
    <div className="App">
      <button
        onClick={() => {
          state.teacher = 'tetz';
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
