import React, { useState, useCallback } from 'react';
import './App.css';
import Login from './pages/Login';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('isAuthenticated') === 'true'
  );

  const handleLogin = useCallback(() => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <MainPage onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;