import React from 'react';
import '../css/numbers.css';

function Numbers() {
  return (
    <div className="numbers-section-container">
      <div className="numbers-box-container">
        <button className="numbers-box" type="button">
          7
        </button>
        <button className="numbers-box" type="button">
          8
        </button>
        <button className="numbers-box" type="button">
          9
        </button>
      </div>
      <div className="numbers-box-container">
        <button className="numbers-box" type="button">
          4
        </button>
        <button className="numbers-box" type="button">
          5
        </button>
        <button className="numbers-box" type="button">
          6
        </button>
      </div>
      <div className="numbers-box-container">
        <button className="numbers-box" type="button">
          1
        </button>
        <button className="numbers-box" type="button">
          2
        </button>
        <button className="numbers-box" type="button">
          3
        </button>
      </div>
      <div className="numbers-box-container">
        <button className="zero" type="button">
          0
        </button>
        <button className="numbers-box" type="button">
          .
        </button>
      </div>
    </div>
  );
}

export default Numbers;
