import './App.css';
import { useState } from 'react';
import Calculator from './Components/Calculator';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { increment, decrement, reset , other } from './Components/SliceReducer';
import { useSelector, useDispatch } from 'react-redux';
import { INITIATE, initiate } from './Components/actions';

function App() {

  const value = useSelector((state)=>state.base.counter)
  const dispatch = useDispatch()

  const [isShow, setShow] = useState(false)
  
  const handleClick = () => {
    setShow(!isShow)
  }
  return (
    <ChakraProvider>
      <div className="App">
        <h1>{value}</h1>
        <button className='show' onClick={handleClick}>{isShow? 'Show' : 'Hide'}</button>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch({type:'base/other', payload:INITIATE})}>Reset</button>
        <button onClick={()=>dispatch({type:'base/other', payload:'ADD'})}>Initiate</button>
      
        <Calculator />

    </div>
  </ChakraProvider>
  );
}

export default App;
