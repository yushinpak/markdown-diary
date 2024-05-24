import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 레이아웃
import Layout from "../components/global/Layout";

// 각 페이지
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout component={Home} />} />
        {/* <Route path="/mypage" element={<Layout component={Mypage} />} /> */}
        {/* <Route path="/DiaryEditor" element={<Layout component={DiaryEditor} />} /> */}
        {/* 뷰어는 세부적으로 좀 더 자세하게 숫자도 쓰고 해야댕 */}
        {/* <Route path="/DiaryViewer" element={<Layout component={DiaryViewer} />} /> */}
        {/* <Route path="/" element={<Layout component={Register} />} /> */}

      </Routes>
    </Router>
  );
};

export default AppRouter;
