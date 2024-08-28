import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Info from './components/Info';
import Menu from './components/Menu';
import Search from './components/Search';
import Status from './components/Status';
import StoryBalance from './components/StoryBalance';
import MainContent from './components/MainContent';
import logo from './images/logo.png';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = sessionStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/login" 
            element={
              isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            } 
          />
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <div className="all-section">
                  <div className="logo-info">
                    <img className="logo" src={logo} alt="Company's logo" /> 
                    <Info />
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                  <div className="main-content">
                    <Status />
                    <div className="content">
                      <div className="main-layout">
                        <div className="main-section">
                          <Menu />
                          <Search />
                          <MainContent />
                        </div>
                      </div>
                    </div>
                    <StoryBalance />
                  </div>
                </div>
              ) : <Navigate to="/login" />
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
