import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 레이아웃
import Layout from "../components/global/Layout";

// 각 페이지
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import DiaryViewer from "../pages/diary/DiaryViewer";
import DiaryEditor from "../pages/diary/DiaryEditor";
import DiaryInformation from "../pages/diaryInformation/DiaryInformation";
import Register from "../pages/register/Register";
import DiaryWriter from "../pages/diary/DiaryWriter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout component={Home} />} />
        <Route path="/diary-information" element={<Layout component={DiaryInformation} />} />
        <Route path="/diary-editor/:title" element={<Layout component={DiaryEditor} />} />
        <Route path="/diary-writer" element={<Layout component={DiaryWriter} />} />
        {/* <Route path="/diary-editor/:title" element={<Layout component={DiaryEditor} />} /> */}
        <Route path="/:title" element={<Layout component={DiaryViewer} />} />
        <Route path="/register" element={<Layout component={Register} />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
