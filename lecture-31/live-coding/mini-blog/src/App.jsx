import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./components/Layout";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
  )
}

export default App
