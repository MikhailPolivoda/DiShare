import React from 'react';
import './Menu.css';  // Correctly import the CSS file

function Menu() {
  return (
    <div className="menu">
      <button className = "typeWorks">Работы</button>
      <button className = "typeWorks">Тесты</button>
      <button className = "typeWorks">ВКР</button>
    </div>
  );
}

export default Menu;
