import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';

function App() {
  return (
    <BrowserRouter>
      <h1>Math Magicians</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
