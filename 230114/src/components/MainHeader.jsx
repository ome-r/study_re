import React from 'react';

export default function MainHeader(props) {
  const { userID, text, href } = props;
  return (
    <>
      <h1>{userID}님 환영합니다.</h1>
      <a href={href}>{text}</a>
    </>
  );
}

// export default function MainHeader({ userID, href, text }) {
//   return (
//     <>
//       <h1>{userID}님 환영합니다.</h1>
//       <a href={href}>{text}</a>
//     </>
//   );
// }

// export default function MainHeader(props) {
//   return (
//     <>
//       <h1>{props.userID}님 환영합니다.</h1>
//       <a href={props.href}>{props.text}</a>
//     </>
//   );
// }
