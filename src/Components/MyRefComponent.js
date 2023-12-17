import React, { useRef } from 'react';

export default function MyRefComponent () {
  const priceRef = useRef(null);

  const handleClick = () => {
    if (priceRef.current) {
      // Access or manipulate the input element
      console.log(priceRef.current.value);
      priceRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={priceRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};