import React, { useState } from 'react';

function Counter() {
  // 배열 비구조화 할당
  const [number, setNumber] = useState(0);

  const onPlus = () => {
    setNumber(number + 1);
  };

  const onMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{ number }</h1>
      <button onClick={ onPlus }>plus +</button>
      <button onClick={ onMinus }>minus -</button>
    </div>
  );
}

export default Counter;