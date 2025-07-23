import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [n1,setN1] = useState()
    const [n2,setN2] = useState()
    

    function addition(){
        setResult(Number(n1)+Number(n2))
    }
    function division(){
        if(n2==0){
            setResult("can't divide by Zero")
        }else{
            setResult(Number(n1)/Number(n2))
        }
    }
    function subtract(){
        setResult(Number(n1)-Number(n2))
    }

    function multiplication(){
        if(n1==0 || n2==0){
            setResult("Multiply by Zero always ZERO")
        }else{
            setResult(Number(n1)*Number(n2))
        }
    }

    console.log(n1,'n1')
  return (
    <div>
      <input type='number' onChange={(e)=>setN1(e.target.value)} />
      <input type='number' onChange={(e)=>setN2(e.target.value)}/>
      <div className='redFont'>{result}</div>
      <button onClick={addition}>+</button>
      <button onClick={division}>/</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiplication}>*</button>

    </div>
  )
}

export default Calculator
