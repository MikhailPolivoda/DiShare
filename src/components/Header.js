import React from 'react';
import logo from '../images/logo.png';
import Status from '../components/Status';
import './Header.css';


function Header({ onLogout }) {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Company's logo" />
            <Status/>
            <button className = "logout-button" onClick={onLogout}>Logout</button> {/* Кнопка выхода */}
        </div>
    );
}

export default Header;
