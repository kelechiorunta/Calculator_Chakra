import './App.css';
import { useState } from 'react';
import Calculator from './Components/Calculator';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Box, Button, Heading, Text } from '@chakra-ui/react'

function App() {
  const [isShow, setShow] = useState(false)
  
  const handleClick = () => {
    setShow(!isShow)
  }
  return (
    <ChakraProvider>
      <div className="App">
        <button className='show' onClick={handleClick}>{isShow? 'Show' : 'Hide'}</button>
        <button>Increment</button>
      
        <Calculator />

    </div>
  </ChakraProvider>
  );
}

export default App;
