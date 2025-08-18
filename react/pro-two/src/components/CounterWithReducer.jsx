import React, { useReducer } from 'react'

const initialState = {count:0}

function reducer(state, action){
    switch (action.type) {
        case 'increament':
            // state.count = state.count +1
            return {count:state.count+1}
        case 'decreament':
            return {count: state.count - 1}
        default:
            return state     
    }
}

const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={()=>dispatch({type:'increament'})}>Increament</button>
      <button onClick={()=>dispatch({type:'decreament'})}>Decreament</button>
    </div>
  )
}

export default CounterWithReducer
