import React from "react";

const NameInput = ({ inputType, onchange, value }) => {
  return (
    <div>
      <input 
      type={inputType} 
      placeholder="Add your Name here"
      value={value}
      onChange={(e)=>onchange(e.target.value)}
      />
    </div>
  );
};

export default NameInput;
