import React from 'react';
import Numbers from './Numbers';
import '../css/calculator.css';

function Calculator() {
  return (
    <div className="container">
      <div className="result">0</div>
      <div className="numbers-container">
        <div className="numbers">
          <button className="numbers-btn" type="button">
            AC
          </button>
          <button className="numbers-btn" type="button">
            +/-
          </button>
          <button className="numbers-btn" type="button">
            %
          </button>
          <Numbers />
        </div>
        <div className="operators">
          <button className="operator-btn" type="button">÷</button>
          <button className="operator-btn" type="button">X</button>
          <button className="operator-btn" type="button">-</button>
          <button className="operator-btn" type="button">+</button>
          <button className="operator-btn" type="button">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
