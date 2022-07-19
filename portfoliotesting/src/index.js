import React from 'react';
import ReactDOM from 'react-dom/client';
import './Pages/css/index.css';
import App from './Pages/App';
import PortfolioShowcase from './Pages/PortfolioShowcase.js';
import reportWebVitals from './reportWebVitals';
import NavBarComponent from './Components/navBarComponent';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavBarComponent />
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/Portfolio" element={<PortfolioShowcase />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
