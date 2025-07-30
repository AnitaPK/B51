import React from 'react'

const SendMessage = ({inputType}) => {
  return (
    <div>
      <input type={inputType} value='Send Message' />
    </div>
  )
}

export default SendMessage
