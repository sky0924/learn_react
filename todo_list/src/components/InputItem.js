import React from "react";
import "./InputItem.css";

const InputItem = ({ value, onChange, onKeyPress, onCreate }) => {
  return (
    <div className="inputItem">
      <input value={ value } onChange={ onChange } onKeyPress={ onKeyPress } />
      <div className="createButton" onClick={ onCreate }>
        button
      </div>
    </div>
  );
};

export default InputItem;