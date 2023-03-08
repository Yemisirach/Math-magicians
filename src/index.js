import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/styles.css';
/* eslint-disable-next-line */
import Calculator from "./Components/Calculator";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Quote from './Components/Quote';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div id="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
