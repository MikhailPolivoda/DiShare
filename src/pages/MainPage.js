import React from 'react';
import Info from '../components/Info';
import Menu from '../components/Menu';
import Search from '../components/Search';
import Status from '../components/Status';
import StoryBalance from '../components/StoryBalance';
import MainContent from '../components/MainContent';

function MainPage({ onLogout }) {
    return (
        <div className="all-section">
            <div className="logo-info">
                <img className="logo" src="/path/to/logo.png" alt="Company's logo" /> 
                <Info />
                <button onClick={onLogout}>Logout</button> {/* Кнопка выхода */}
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
    );
}

export default MainPage;
