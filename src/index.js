import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import LandingPage from './pages/landingPage';
import CorporateAndSecurityPracticeArea from './pages/corporateAndSecurityPracticeArea.js';
import reportWebVitals from './reportWebVitals';
import AttorneyPage from './pages/attorneyPage.js';
import ResponsiveNavbar from './components/responsiveNavbar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/practiceArea" element={<CorporateAndSecurityPracticeArea />}/>
        <Route path="/attorneyPage" element={ <AttorneyPage/>}/>
    </Routes>
      <ResponsiveNavbar/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
