import { useState } from 'react';
import './App.css';

function Key({ label, onClick, id }) {
  return (
    <button onClick={() => onClick(label)} id={id}>
      {label}
    </button>
  );
}

function Display({ value }) {
  return (
    <div className="Display">
      {value}
    </div>
  );
}

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorInput, setCalculatorInput] = useState('');

  const handleButtonClick = (label) => {
    if (label === 'C') {
      setDisplayValue('0');
      setCalculatorInput('');
    } else if (label === '=') {
      try {
        setDisplayValue(eval(calculatorInput));
      } catch {
        setDisplayValue('Syntax Error');
      }
    } else {
      const newInput = calculatorInput + label;
      setCalculatorInput(newInput);
      setDisplayValue(newInput);
    }
  };

  const handleSurnameClick = () => {
    setDisplayValue('Ivan Andres');
  };

  return (
    <div className="App">
      <h1>Calculator of Ivan Andres - IT3A</h1> {}
      <div className="CalcContainer">
        <div className="DispContainer">
          <Display value={displayValue} />
        </div>
        <div className="ButtonsContainer">
          <div className="btn-box1">
            <Key label={7} onClick={handleButtonClick} />
            <Key label={8} onClick={handleButtonClick} />
            <Key label={9} onClick={handleButtonClick} />
            <Key label={'/'} onClick={handleButtonClick} />
          </div>
          <div className="btn-box2">
            <Key label={4} onClick={handleButtonClick} />
            <Key label={5} onClick={handleButtonClick} />
            <Key label={6} onClick={handleButtonClick} />
            <Key label={'*'} onClick={handleButtonClick} />
          </div>
          <div className="btn-box3">
            <Key label={1} onClick={handleButtonClick} />
            <Key label={2} onClick={handleButtonClick} />
            <Key label={3} onClick={handleButtonClick} />
            <Key label={'-'} onClick={handleButtonClick} />
          </div>
          <div className="btn-box4">
            <Key label={'C'} onClick={handleButtonClick}/>
            <Key label={0} onClick={handleButtonClick} />
            <Key label={'='} onClick={handleButtonClick} />
            <Key label={'+'} onClick={handleButtonClick} />
          </div>
        </div>
        <div className="btn-box5">
          <Key label={'ANDRES'} onClick={handleSurnameClick} id="surname" />
        </div>
      </div>
    </div>
  );
}

export default App;
