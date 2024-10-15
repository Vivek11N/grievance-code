import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import UserDashboard from './components/UserDashboard';
import SupervisorDashboard from './components/SupervisorDashboard';
import AssigneeDashboard from './components/AssigneeDashboard';

function App() {
  const [role, setRole] = useState('');

  const handleLogin = (userRole) => {
    setRole(userRole);
  };

  return (
      

      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user/dashboard" element={role === 'user' ? <UserDashboard /> : <Navigate to="/" />} />
        <Route path="/supervisor/dashboard" element={role === 'supervisor' ? <SupervisorDashboard /> : <Navigate to="/" />} />
        <Route path="/assignee/dashboard" element={role === 'assignee' ? <AssigneeDashboard /> : <Navigate to="/" />} />
      </Routes>
    
  );
}

export default App;
