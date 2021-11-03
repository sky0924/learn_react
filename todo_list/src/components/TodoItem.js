import React, { Component } from 'react';
import './TodoItem.css';
import { RiMoreFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

class TodoItem extends Component {

  // 🤔? 뭘까
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  // 🤔? `todo-text ${ checked && 'checked' }`
  // 🤔? e.stopPropagation()
  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={ () => onToggle(id) }>
        <div className="remove" onClick={ (e) => {
          e.stopPropagation();
          onRemove(id)
        } }>&times;</div>

        <div style={ { color } } className={ `todo-text ${ checked && 'checked' }` }>
          <div>{ text }</div>
        </div>

        {
          checked && (<div className="check-mark">&#x2713;</div>)
        }

        <Link className="more" to="./detail">
          <RiMoreFill />
        </Link>
      </div>
    );
  }
}

export default TodoItem;