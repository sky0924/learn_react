import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const props = {
      text: this.text,
      checked: this.checked,
      id: this.id,
      onToggle: this.onToggle,
      onRemove: this.onRemove
    };

    return (
      <div className="todoItem">
        <div className="deleteButton">&times;</div>
        <div className="???"></div>
      </div>
    );
  };
}

export default TodoItem;