import React from 'react'
import { useDispatch } from 'react-redux'
import { increament,decreament } from '../redux/counterSlice'

const Button = () => {

    const dispatch = useDispatch()

  return (
    <>
    <button onClick={()=>dispatch(increament())}>
      Increament
    </button>
    <button onClick={()=>dispatch(decreament())}>
        Decreament
    </button>
    <button onClick={()=>dispatch()}>Reset</button>
    </>
  )
}

export default Button
