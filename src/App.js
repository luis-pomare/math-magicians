import React from 'react';
import './App.css';
// eslint-disable-next-line
import Calculator from './components/calculator.js';

// eslint-disable-next-line
class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
