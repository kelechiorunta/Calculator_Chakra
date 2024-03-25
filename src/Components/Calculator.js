import React from 'react'
import { useReducer } from 'react'
import { CalcReducer } from '../Modules/CalcReducer'
import { Box, Button, Heading, Text, Grid } from '@chakra-ui/react'

var operand = 0;

function Calculator() {
    const initialParam = {digit:"0", operator:"", operatorClicked:false}
    const [state, dispatch] = useReducer(CalcReducer, initialParam)
    

    const appendDigit = (e) =>{
        dispatch({
            type: "APPEND",
            payload: e.target.textContent
        })
    }
    const resetDigit = () =>{
        dispatch({
            type:"RESET"
        })
    }
    const deleteDigit = () =>{
        dispatch({
            type:"DELETE"
        })
    }
    const computation = (value) =>{
        if (state.operator==="+"){
            operand += value
            value = 0
        }
        else if (state.operator==="-"){
            operand -= value
            value = 0
        }
        else if (state.operator==="*"){
            operand *= value
        }
        else if (state.operator==="/"){
            operand /= value
        }
        else{
            operand = value
        }
        return operand
    }

    const getComputation = (e) =>{
        dispatch({
            type: "COMPUTE",
            result: (state.operatorClicked===false) ? computation(state.digit): state.digit,
            nextOperator: e.target.textContent,
            operatorClicked: true
        })
    }
  return (
    <Box className='container-grid' p={4} width={{base:'97%', sm:'97%', md:'95%', lg:'58%'}}
    height={{base:'97%', sm:'97%', md:'95%', lg:'98%'}}
    m={{base:'8px', sm:'12px', md:'15px', lg:'auto'}} shadow={'md'}
    border={'1px solid blue'} borderRadius='10px'>
        <Grid p={4} shadow='md' height={{base:'97%', sm:'97%', md:'95%', lg:'98%'}}
        gridTemplateColumns={{base:'repeat(4, 1fr)', sm:'repeat(4, 1fr)', md:'repeat(5, 1fr)'}}
         gap={2}>
            
            <Heading data-testid='display' p={2} shadow='lg' textAlign='right' boxShadow='2px 2px 4px blue' mb={4}
            border={'1px solid blue'} borderRadius='10px' gridColumn={{base:'span 4', sm:'span 4', md:'span 5'}}>{state.digit}</Heading>
            
            <Button colorScheme='red' gridColumn={{base:'span 2', sm:'span 2', md:'span 2'}} 
            onClick={resetDigit}>CE</Button>
            <Button colorScheme='red' gridColumn={{base:'span 2', sm:'span 2', md:'span 3'}}
            onClick={deleteDigit}>DEL</Button>

            <Button colorScheme='blue'  
            onClick={appendDigit}>1</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>2</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>3</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>4</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>5</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>6</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>7</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>8</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>9</Button>
            <Button colorScheme='blue'  
            onClick={appendDigit}>0</Button>
            
             <Button colorScheme='green'  
            onClick={getComputation}>+</Button>
             <Button colorScheme='green'  
            onClick={getComputation}>-</Button>
             <Button colorScheme='green'  
            onClick={getComputation}>*</Button>
             <Button colorScheme='green'  
            onClick={getComputation}>/</Button>
             <Button colorScheme='green'  
            onClick={getComputation}>=</Button>
        </Grid>
           </Box>
  )
}

export default Calculator