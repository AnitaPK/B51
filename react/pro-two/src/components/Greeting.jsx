import React from 'react'

const Greeting = (props) => {
    console.log(props)
    console.log(props.studName)
  return (
    <>
    <h3>
      Hello {props.studName}
    </h3>
    <p>You got {props.marks} marks</p>
    </>
  )
}

export default Greeting
