import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Info from './components/Info';
import Menu from './components/Menu';
import Search from './components/Search';
import Status from './components/Status';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
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
                <>
                  <Status /> {/* Status is now outside of the main content layout */}
                  <div className="content">
                    <Info />
                    <div className="main-layout">
                      <div className="main-section">
                        <Menu />
                        <Search />
                        <MainContent />
                      </div>
                    </div>
                  </div>
                </>
              ) : <Navigate to="/login" />
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
