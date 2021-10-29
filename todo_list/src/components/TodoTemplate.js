import React from "react";
import "./TodoTemplate.css";

const TodoTemplate = ({inputItem, itemList}) => {
  return (
    <div className="todoTemplate">
      <div className="title">
        오늘의 할 일
      </div>
      <div className="inputItem">
        { inputItem }
      </div>
      <div className="itemList">
        { itemList }
      </div>
    </div>
  );
};

export default TodoTemplate;