import './app.css'
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Desk from './modules/Desc/desk'
import MainPage from './pages/minipage' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/products/:id" element={<Desk />} />
    </Routes>
  );
}

export default App
