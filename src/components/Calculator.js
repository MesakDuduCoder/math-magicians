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

  console.log(state);
  return (
    <div className="container">
      <div className="result">
        <Display total={state.total} operation={state.operation} next={state.next} />
      </div>
      <div className="numbers-container">
        <div className="numbers">
          <button
            className="numbers-btn"
            type="button"
            onClick={(e) => submit(e, 'AC')}
          >
            AC
          </button>
          <button
            className="numbers-btn"
            type="button"
            onClick={(e) => submit(e, '+/-')}
          >
            +/-
          </button>
          <button
            className="numbers-btn"
            type="button"
            onClick={(e) => submit(e, '%')}
          >
            %
          </button>
          <div className="numbers-section-container">
            <div className="numbers-box-container">
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '7')}
              >
                7
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '8')}
              >
                8
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '9')}
              >
                9
              </button>
            </div>
            <div className="numbers-box-container">
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '4')}
              >
                4
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '5')}
              >
                5
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '6')}
              >
                6
              </button>
            </div>
            <div className="numbers-box-container">
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '1')}
              >
                1
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '2')}
              >
                2
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '3')}
              >
                3
              </button>
            </div>
            <div className="numbers-box-container">
              <button
                className="zero"
                type="button"
                onClick={(e) => submit(e, '0')}
              >
                0
              </button>
              <button
                className="numbers-box"
                type="button"
                onClick={(e) => submit(e, '.')}
              >
                .
              </button>
            </div>
          </div>
        </div>
        <div className="operators">
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, '÷')}
          >
            ÷
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, 'x')}
          >
            X
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, '-')}
          >
            -
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, '+')}
          >
            +
          </button>
          <button
            className="operator-btn"
            type="button"
            onClick={(e) => submit(e, '=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
