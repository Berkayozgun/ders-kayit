import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default GlobalRouter;