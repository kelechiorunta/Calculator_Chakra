export const CalcReducer = (state, action) =>{
    switch(action.type){
        case "APPEND":{
            return{...state, digit: (state.digit==="0" || state.operatorClicked===true)? 
                            Number(action.payload): (state.digit.toString().includes(".") && action.payload==="0")? state.digit + action.payload:Number(state.digit + action.payload), 
                            operator: state.operator, operatorClicked: false}
        }
        case "RESET":{
            return{...state, digit: "0", operator: "", operatorClicked: false}
        }
        case "COMPUTE":{
            return{...state, digit: action.result, operator: action.nextOperator, operatorClicked: true}
        }
        case "DELETE":{
            return{...state, digit: Number(state.digit.toString().substr(0, state.digit.toString().length - 1)),
                             operator:state.operator, operatorClicked:state.operatorClicked}
        }
        case "ADD_DECIMAL":{
            return{...state, digit: state.operatorClicked===true?"0.":(state.digit.toString().includes("."))? (state.digit.toString()) : state.digit+".",
                             operator: state.operator, operatorClicked: false}
        }
        case "TOGGLE_NEGATE":{
            return{...state, digit: Number(-state.digit), operator: state.operator, operatorClicked: state.operatorClicked }
        }
        default:{
            return state
        }
    }
}