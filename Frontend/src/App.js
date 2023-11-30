import { Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <>
      <div className="App font-opensans">
        <Routes>
          <Route index path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/blog/:id"
            element={<ArticleDetail></ArticleDetail>}
          ></Route>
          <Route
            path="/register"
            element={<RegisterPage></RegisterPage>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
        <Toaster></Toaster>
      </div>
    </>
  );
}

export default App;
