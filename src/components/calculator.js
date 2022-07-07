import React, { useState } from 'react';
import calculate from './logic/calculate';

export default function Calculator() {
  const [states, setStates] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const { total, next, operation } = states;

  const buttonHandler = (buttonName) => {
    setStates(calculate(states, buttonName));
  };

  return (
    <div id="main-container">
      <h3>Lets do some math</h3>
      <main id="container">
        <div id="input">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('AC')}
          role="button"
          tabIndex={0}
        >
          AC
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('+/-')}
          role="button"
          tabIndex={0}
        >
          +/-
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('%')}
          role="button"
          tabIndex={0}
        >
          %
        </div>
        <div
          className="gridItem operator"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('÷')}
          role="button"
          tabIndex={0}
        >
          ÷
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('7')}
          role="button"
          tabIndex={0}
        >
          7
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('8')}
          role="button"
          tabIndex={0}
        >
          8
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('9')}
          role="button"
          tabIndex={0}
        >
          9
        </div>
        <div
          className="gridItem operator"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('x')}
          role="button"
          tabIndex={0}
        >
          x
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('4')}
          role="button"
          tabIndex={0}
        >
          4
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('5')}
          role="button"
          tabIndex={0}
        >
          5
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('6')}
          role="button"
          tabIndex={0}
        >
          6
        </div>
        <div
          className="gridItem operator"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('-')}
          role="button"
          tabIndex={0}
        >
          -
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('1')}
          role="button"
          tabIndex={0}
        >
          1
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('2')}
          role="button"
          tabIndex={0}
        >
          2
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('3')}
          role="button"
          tabIndex={0}
        >
          3
        </div>
        <div
          className="gridItem operator"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('+')}
          role="button"
          tabIndex={0}
        >
          +
        </div>
        <div
          className="gridItem keys cero"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('0')}
          role="button"
          tabIndex={0}
        >
          0
        </div>
        <div
          className="gridItem keys"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('.')}
          role="button"
          tabIndex={0}
        >
          .
        </div>
        <div
          className="gridItem operator"
          onKeyDown={buttonHandler}
          onClick={() => buttonHandler('=')}
          role="button"
          tabIndex={0}
        >
          =
        </div>
      </main>
    </div>
  );
}
