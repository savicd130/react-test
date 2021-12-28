import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllUsers from './pages/AllUsers';
import User from './pages/User';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="allUsers" element={<AllUsers />} />
      <Route path="user/:id" element={<User />} />
    </Routes>
  );
}

export default App;
