import React, { useReducer } from 'react'

const initialValue = { count : 0 }

type CounterState = {
     count : number
}

type UpdateActions = {
    type : 'increment' | 'decrement'
    payload : number
}

type ResetActions = {
    type : 'reset'
}

// To use Different Types is called Discriminated unions
type CounterAction = UpdateActions | ResetActions

function reducer(state : CounterState , action : CounterAction){
     switch(action.type){
        case 'increment' : 
            return { count : state.count + action.payload }
        case 'decrement' : 
            return { count : state.count - action.payload }
        case 'reset':
            return initialValue
        default : 
            return state
     }
}

const Counter = () => {

    const [ state , dispatch ] = useReducer(reducer , initialValue);

  return (
    <div>
        count : { state.count }
        <button onClick={() => dispatch({type : 'increment' , payload : 10})}>Increment 10</button>
        <button onClick={() => dispatch({type : 'decrement' , payload : 10})}>Decrement 10</button>
        <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter
