import {useState} from 'react';
import './App.css';
import { NumberButton } from './component/NumberButton';
import { SymbolButton } from './component/SymbolButton';

function App() {


  const [leftparam,setLeftparam] = useState('');
  const [symbol,setSymbol] = useState('');
  const [rightparam,setRightparam] = useState('');

  const [text, setText] = useState('');

  const clickNumberButton = (num: number):void => {

    if(!!symbol){
      setRightparam(rightparam + String(num));
    } else {
      setLeftparam(leftparam + String(num));
    }
  }

  const clickSymbolButton = (symbol:string) => {
   setSymbol(symbol);
  }

  const clickEqualButton = () => {
    const numLeftparam = Number(leftparam);
    const numRightParam = Number(rightparam);

    switch(symbol){
      case '+':
        setLeftparam(String(numLeftparam + numRightParam));
        break;
      case '-':
        setLeftparam(String(numLeftparam - numRightParam));
        break;
      default:

    }

    setRightparam('');
    setSymbol('');
  }

  const clickClearButton = () => {
    setLeftparam('');
    setRightparam('');
    setSymbol('');
  }


  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={leftparam + symbol + rightparam} />
        <div>
          <NumberButton number={9} onClick={() => {clickNumberButton(9)}} />
          <NumberButton number={8} onClick={() => {clickNumberButton(8)}}/>
          <NumberButton number={7} onClick={() => {clickNumberButton(7)}}/>
          <SymbolButton symbol='/' onClick={() => {clickSymbolButton('/')}}/>
        </div>
        <div>
          <NumberButton number={6} />
          <NumberButton number={5} />
          <NumberButton number={4} />
          <SymbolButton symbol='*' onClick={() => {clickSymbolButton('*')}}/>
        </div>
        <div>
          <NumberButton number={3} />
          <NumberButton number={2} />
          <NumberButton number={1} />
          <SymbolButton symbol='-' onClick={() => {clickSymbolButton('-')}}/>
        </div>
        <div>
          <NumberButton number={0} />
          <SymbolButton symbol='=' onClick={() => {clickEqualButton()}}/>
          <SymbolButton symbol='+' onClick={() => {clickSymbolButton('+')}}/>
          <SymbolButton symbol='C' onClick={() => {clickClearButton()}}/>
        </div>
      </header>
    </div>
  );
}

export default App;
