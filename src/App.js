import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link // 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜 주는 컴포넌트
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App () {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
    </Routes>
  </Router>;
}

export default App;

// react-router-dom의 컴포넌트들이 하는 일은 URL을 바라보고 URL이 바뀌면 어떤 컴포넌트를 보여 줄지 결정함
// Routes: Route를 찾음 (여기에서 Route는 URL을 의미) 그리고 Route를 찾으면 컴포넌트를 렌더링함 (기존 Switch 컴포넌트에서 대체됨)
/*
  - BrowserRouter: URL이 보통의 웹사이트 같음, 대부분 이걸 사용
  - HashRouter: http://localhost:3000/#/movie 이런 형태가 됨
*/
// Routes 컴포넌트를 넣어 준 이유는 한 번에 하나의 Route만 렌더링하기 위해서임
