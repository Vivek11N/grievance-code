import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserDashboard from './components/UserDashboard';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
