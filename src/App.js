import { useState } from 'react';
import './App.css';
import { BackgroundAnimation } from './BackgroundAnimation';
import InputContainer from './InputContainer';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputContainer setInputValue={setInputValue} />
      <BackgroundAnimation />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
