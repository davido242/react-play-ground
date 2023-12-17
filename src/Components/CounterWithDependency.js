import React, { useState, useEffect } from "react";

function CounterWithDependency() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }

  export default CounterWithDependency;