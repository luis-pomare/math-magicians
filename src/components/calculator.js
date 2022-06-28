import React from 'react';

// eslint-disable-next-line
export default class Calculator extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main id="container">
        <div className="gridItem" id="input">
          0
        </div>
        <div className="gridItem keys">AC</div>
        <div className="gridItem keys">+/-</div>
        <div className="gridItem keys">%</div>
        <div className="gridItem operator">÷</div>
        <div className="gridItem keys">7</div>
        <div className="gridItem keys">8</div>
        <div className="gridItem keys">9</div>
        <div className="gridItem operator">x</div>
        <div className="gridItem keys">4</div>
        <div className="gridItem keys">5</div>
        <div className="gridItem keys">6</div>
        <div className="gridItem operator">-</div>
        <div className="gridItem keys">1</div>
        <div className="gridItem keys">2</div>
        <div className="gridItem keys">3</div>
        <div className="gridItem operator">+</div>
        <div className="gridItem keys cero">0</div>
        <div className="gridItem keys">.</div>
        <div className="gridItem operator">=</div>
      </main>
    );
  }
}
