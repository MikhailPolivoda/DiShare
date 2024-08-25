import React from 'react';
import './Status.css';  // Correctly import the CSS file

function Status() {
  return (
    <div className="status">
      <p>Студент НГТУ</p>
      <p>Фамилия И.О</p>
      <p>СЕМЕСТР: 4</p>
      <p>БАЛАНС ЗАПРОСОВ: 5</p>
    </div>
  );
}

export default Status;
