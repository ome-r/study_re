import './App.css';
import Board from './Components/Board';
import Profile from './Components/Profile';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import BoardDetail from './Components/BoardDetail';

function App() {
  return (
    <>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">홈 페이지 이동</Link>
            </li>
            <li>
              <Link to="/profile">프로필 페이지 이동</Link>
            </li>
            <li>
              <Link to="/board">게시판 페이지 이동</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="profile" element={<Profile />} />
          <Route path="board" element={<Board />} />
          <Route path="board/:boardID" element={<BoardDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
