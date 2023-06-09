import React, { useState } from 'react';
import Display from './Display';
import '../css/calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState(() => ({
    total: null,
    next: null,
    operation: null,
  }));

  function submit(e, number) {
    e.preventDefault();
    setState((prevState) => calculate(prevState, number));
  }
  const total = state.total || '';
  const operation = state.operation || '';
  const next = state.next || '';

  return (
    <div className="container">
      <div className="result" data-testid="display">
        <Display total={total} operation={operation} next={next} />
      </div>
      <div className="numbers-container">
        <div className="numbers-row">
          <button type="button" onClick={(e) => submit(e, "AC")}>
            AC
          </button>
          <button type="button" onClick={(e) => submit(e, "+/-")}>
            +/-
          </button>
          <button type="button" onClick={(e) => submit(e, "%")}>
            %
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, "÷")}
          >
            ÷
          </button>
        </div>
        <div className="numbers-row">
          <button data-testid="7" type="button" onClick={(e) => submit(e, "7")}>
            7
          </button>
          <button type="button" onClick={(e) => submit(e, "8")}>
            8
          </button>
          <button type="button" onClick={(e) => submit(e, "9")}>
            9
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, "x")}
          >
            x
          </button>
        </div>
        <div className="numbers-row">
          <button type="button" onClick={(e) => submit(e, "4")}>
            4
          </button>
          <button type="button" onClick={(e) => submit(e, "5")}>
            5
          </button>
          <button type="button" onClick={(e) => submit(e, "6")}>
            6
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, "-")}
          >
            -
          </button>
        </div>
        <div className="numbers-row">
          <button type="button" onClick={(e) => submit(e, "1")}>
            1
          </button>
          <button type="button" onClick={(e) => submit(e, "2")}>
            2
          </button>
          <button type="button" onClick={(e) => submit(e, "3")}>
            3
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, "+")}
          >
            +
          </button>
        </div>
        <div className="numbers-row">
          <button
            className="zero"
            type="button"
            onClick={(e) => submit(e, "0")}
          >
            0
          </button>
          <button type="button" onClick={(e) => submit(e, ".")}>
            .
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, "=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
