import React, { useReducer } from 'react'
import {initialState,reducer} from './countReducer.js'

const CounterComponent = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
<hr></hr>
<div>With seperate files</div>
      <h1>Count: {state.count}</h1>
      <button onClick={()=>dispatch({type:'increament'})}>Increament</button>
      <button onClick={()=>dispatch({type:'decrement'})}>Decreament</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    <hr></hr>
    </div>
  )
}

export default CounterComponent
