// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar';
import HistoryPage from './Components/history';
import MessagesPage from './Components/messages';
import GiftsPage from './Components/gifts';
import PhotosPage from './Components/pictures';
import AnniversaryPage from './Components/anniversary';
import './App.css';  // Importing the global CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HistoryPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/gifts" element={<GiftsPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/anniversary" element={<AnniversaryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
