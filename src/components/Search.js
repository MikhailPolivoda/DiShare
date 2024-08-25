import React from 'react';
import './Search.css';  // Убедитесь, что файл стилей импортирован правильно

function Search() {
  return (
    <div className="search">
      <i className="fas fa-search"></i> {/* Иконка поиска Font Awesome */}
      <input type="text" placeholder="Поиск" />
    </div>
  );
}

export default Search;
