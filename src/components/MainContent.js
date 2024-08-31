import React from "react";
import "./MainContent.css";
import Menu from "../components/Menu";
import Search from "../components/Search";
import StoryBalance from "../components/StoryBalance";
import SearchResults from "./SearchResults";

function MainContent() {
  return (
    <div className="main-section">
      <div className="flex-column">
        <Menu />
        <Search />
      </div>
      <div className="flex-row main-content">
        <SearchResults />
        <StoryBalance />
      </div>
    </div>
  );
}

export default MainContent;
