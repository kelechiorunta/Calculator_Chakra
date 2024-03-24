export const CalcReducer = (state, action) =>{
    switch(action.type){
        case "APPEND":{
            return{...state, digit: (state.digit==="0" || state.operatorClicked===true)? Number(action.payload): Number(state.digit + action.payload), operator: state.operator, operatorClicked: false}
        }
        case "RESET":{
            return{...state, digit: "0", operator: "", operatorClicked: false}
        }
        case "COMPUTE":{
            return{...state, digit: action.result, operator: action.nextOperator, operatorClicked: true}
        }
        default:{
            return state
        }
    }
}