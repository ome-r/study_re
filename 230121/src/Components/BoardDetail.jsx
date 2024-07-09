import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
  //   const params = useParams();
  const { boardID } = useParams();

  //   console.log(params);
  return (
    <>
      <Header />
      {/* <h2>{params.boardID} 번 게시글 내용입니다!</h2> */}
      <h2>{boardID} 번 게시글 내용입니다!</h2>
    </>
  );
}
