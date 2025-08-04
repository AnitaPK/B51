import React, { useState, useCallback } from "react";

function ChildComponent({ handleClick }) {
  console.log("Child re-rendered");
  return <button onClick={handleClick}>Click Me</button>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
