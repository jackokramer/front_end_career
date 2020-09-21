//reducer - helps us manage app state - helpful becuase they're useful also known as a pure function

// two arguments current state and an action

//const reducer = (state, action) => newState;
/*
function counterReducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {...state, count: state.count+1};
        case 'DECREMENT':
            return {...state, count: state.count -1};
        default: 
            return state;
    }
//    return state +1;//increment
}

counterReducer(0, {type: 'INCREMENT'})//
const result = counterReducer(1, {type: 'DECREMENT'})//0
counterReducer(0, {type: 'DECREMENT'})

/* action 
{type: 'INCREMENT'}// needs to be capitalized to show what's taking place
{type: 'DECREMENT'}
console.log(counterReducer(0) ===1);

*/

const initialUser = {
    name: 'Jesse',
    email: 'Jesse@gmail.com'
}

function constUser(state, action){ // action has payload that allows any data type
    switch(action.type){
        case "CHANGE_NAME":
            return{...state, name: action.payload.name};
        case "CHANGE EMAIL":
            return{state, email: action.payload.email};
            default: 
            return state;
    }
}

const  results = constUser(initialUser, {type: 'CHANGE EMAIL', payload: {email: 'jesse@hotmail.com'}});
console.log(results.email === 'jesse@hotmail.com')
//action.payload.name;
//{type: 'CHANGE_EMAIL', payload:{ email: 'Jose@gmail.com'}}