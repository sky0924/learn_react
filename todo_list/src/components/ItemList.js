import React, { Component } from "react";
import "./ItemList.css";

class ItemList extends Component {
  render() {
    const props = {
      todos: this.todos,
      onToggle: this.onToggle,
      onRemove: this.onRemove
    };

    return (
      <div>
        items
      </div>
    );
  };
}

export default ItemList;