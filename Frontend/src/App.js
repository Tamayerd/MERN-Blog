import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetail from "./pages/articleDetail/ArticleDetail";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
