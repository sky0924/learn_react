import React, { Component } from 'react';
import './TodoItem.css';
import { RiMoreFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

class TodoItem extends Component {

  /* 
  😯!
    shouldComponentUpdate
    -> 변경된 부분만 렌더링한다.
      nextProps는 this의 props와 비교하고, 
      nextState는 this의 state와 비교하여
      값이나 상태가 변경된 부분만 return하여 렌더링한다.
  🤔?
    nextState는 안쓰는데 왜 선언했을까? 선언하지 않아도 되나? 
  */
  shouldComponentUpdate(nextProps) {
    return this.props.checked !== nextProps.checked;
  }

  /*
  😯!
    `todo-text ${ checked && 'checked' }`
    -> checked가 true면 checked라는 className을 가진다.

    e.stopPropagation()
    -> event의 버블링(확산)을 막는다.
  */
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