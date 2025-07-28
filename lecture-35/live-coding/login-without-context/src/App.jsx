import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
