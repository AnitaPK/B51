import React from 'react'

const SubjectInput = ({inputType, onchange, value}) => {
  console.log(value)
    return (
    <div>
      <input 
      type={inputType} 
      placeholder='add subject' 
      onChange={(e)=>onchange(e.target.value)}
      value={value}
      />
    </div>
  )
}

export default SubjectInput
