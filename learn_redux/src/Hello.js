import React from 'react';

function Hello({ name, color, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial && <span>⭐️ </span> }
      안녕하세요, { name }님!
    </div>
  );
}

Hello.defaultProps = {
  name: 'unknown',
  color: '#758eac'
}

export default Hello;