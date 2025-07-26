import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="articles" element={<ArticleListPage />} />
            <Route path="articles/:articleId" element={<ArticleDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  )
}

/*
"/" -> HomePage
"/articles" -> ArticleListPage
"/articles/:articleId" -> ArticleDetailPage
"/blogs" -> NotFoundPage
*/

export default App
