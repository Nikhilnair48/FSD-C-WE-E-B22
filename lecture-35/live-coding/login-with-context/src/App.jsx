import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import { LoginProvider } from './LoginContext';

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;