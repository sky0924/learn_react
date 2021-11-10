import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // 배열 비구조화 할당
  const [number, dispatch] = useReducer(reducer, 0);

  const onPlus = () => {
    dispatch({ type: 'PLUS' });
  };

  const onMinus = () => {
    dispatch({ type: 'MINUS' });
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