import React from 'react';
// eslint-disable-next-line
import calculate from './logic/calculate.js';

// eslint-disable-next-line
export default class Calculator extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { total, operation, next } = this.state;
    return (
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
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('AC')}
          role="button"
          tabIndex={0}
        >
          AC
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('+/-')}
          role="button"
          tabIndex={0}
        >
          +/-
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('%')}
          role="button"
          tabIndex={0}
        >
          %
        </div>
        <div
          className="gridItem operator"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('÷')}
          role="button"
          tabIndex={0}
        >
          ÷
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('7')}
          role="button"
          tabIndex={0}
        >
          7
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('8')}
          role="button"
          tabIndex={0}
        >
          8
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('9')}
          role="button"
          tabIndex={0}
        >
          9
        </div>
        <div
          className="gridItem operator"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('x')}
          role="button"
          tabIndex={0}
        >
          x
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('4')}
          role="button"
          tabIndex={0}
        >
          4
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('5')}
          role="button"
          tabIndex={0}
        >
          5
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('6')}
          role="button"
          tabIndex={0}
        >
          6
        </div>
        <div
          className="gridItem operator"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('-')}
          role="button"
          tabIndex={0}
        >
          -
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('1')}
          role="button"
          tabIndex={0}
        >
          1
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('2')}
          role="button"
          tabIndex={0}
        >
          2
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('3')}
          role="button"
          tabIndex={0}
        >
          3
        </div>
        <div
          className="gridItem operator"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('+')}
          role="button"
          tabIndex={0}
        >
          +
        </div>
        <div
          className="gridItem keys cero"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('0')}
          role="button"
          tabIndex={0}
        >
          0
        </div>
        <div
          className="gridItem keys"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('.')}
          role="button"
          tabIndex={0}
        >
          .
        </div>
        <div
          className="gridItem operator"
          onKeyDown={this.buttonHandler}
          onClick={() => this.buttonHandler('=')}
          role="button"
          tabIndex={0}
        >
          =
        </div>
      </main>
    );
  }
}
