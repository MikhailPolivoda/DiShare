import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Info from "../components/Info";

function MainPage({ onLogout }) {
  return (
    <div className="all-section">
      <Header />
      <Info />
      <MainContent />
    </div>
  );
}

export default MainPage;
