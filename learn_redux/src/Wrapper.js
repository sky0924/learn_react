import React from 'react';

function Wrapper({ children }) {
  const style = {
    borderBottom: '1px solid #cccccc',
    backgroundColor: '#dae0e9',
    fontSize: '2rem',
    padding: '2rem'
  };

  return (
    <div style={ style }>
      { children }
    </div>
  )
}

export default Wrapper;