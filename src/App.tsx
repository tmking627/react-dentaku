import React from 'react';
import './App.css';
import { NumberButton } from './component/NumberButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumberButton number={9} />
      </header>
    </div>
  );
}

export default App;
