import React, { Component } from 'react';
import Form from './components/Form';
import Palette from './components/Palette';
import TodoItemList from './components/TodoItemList';
import TodoTemplate from './components/TodoTemplate';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: 'hello', checked: false },
      { id: 1, text: 'world', checked: true },
      { id: 2, text: '!!', checked: false }
    ],
    color: '#000000'
  }

  handleChange = (e) => {
    this.setState({
      // input 태그에 입력된 값을 state의 input으로 넘긴다.
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      // input을 비운다. 🤔? 빈 값이 배열에 추가되는 건 아닐까?
      input: '',
      // 기존의 todos 배열에 값을 추가하여 새로운 배열을 반환한다.
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color: '#000000'
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      // Enter 키를 눌러도 Create 버튼을 누른 것과 같이 동작한다.
      this.handleCreate();
    }
  }

  // 🤔? 잘 모르겠다.
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <TodoTemplate 
        palette={
          <Palette colors={ colors } selected={ color } onSelect={ handleSelectColor } />
        }
        form={
          <Form 
            value={ input }
            onKeyPress={ handleKeyPress }
            onChange={ handleChange }
            onCreate={ handleCreate }
            color={ color } />
        } 
        items={
          <TodoItemList 
            todos={ todos }
            onToggle={ handleToggle }
            onRemove={ handleRemove } />
        } />
    );
  }

}

export default App;
