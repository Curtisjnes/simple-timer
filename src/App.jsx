import React, {useState} from 'react';
import Header from './components/header-component';
import './App.css';
import DisplayTime from './components/time-component';
import { Button } from '@mui/material';

function App() {
  const [isTimeVisible, setTimeVisible] = useState(false);
  const handleButtonClick = () => {
    setTimeVisible(!isTimeVisible);
  };

  return (
    <div className="App">
      <Header/>
      <div className='Button-Container'>
      <Button variant='contained' color={isTimeVisible ? 'error' : 'success'} className='start' onClick={()=> handleButtonClick()}>
        {isTimeVisible ? 'Stop' : 'Start'}
      </Button>
          {isTimeVisible && <DisplayTime />}
      </div>
    </div>
  );
}
export default App
