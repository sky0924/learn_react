import React, { Component } from 'react';
import Form from '../components/Form';
import Palette from '../components/Palette';
import TodoItemList from '../components/TodoItemList';
import TodoTemplate from '../components/TodoTemplate';

const colors = ['#000000','#1d3557', '#6b705c', '#ff6b6b'];

class App extends Component {

  // 🤔? id에 초기값을 넣어주는 걸까?
  id = 7

  state = {
    input: '',
    todos: [
      { id: 0, text: '할 일 1. Redux 이해 및 적용하기', checked: false },
      { id: 1, text: '할 일 2. react-router-dom 이용하기', checked: true },
      { id: 2, text: '할 일 3. image upload 기능 구현하기', checked: false },
      { id: 3, text: '할 일 4. color 추가 및 삭제 기능 구현하기', checked: false },
      { id: 4, text: '할 일 5. user id 및 password 입력 form 만들기', checked: false },
      { id: 5, 
        text: '할 일 6. 두 줄이 넘어가면 어떻게 되는지 테스트할 아주 길다랗고 길다란 문장, 크게 나쁘진 않은데 check-mark가 toggle 전환될 때마다 items의 width가 변화함', 
        checked: true },
      { id: 6, text: '할 일 7. GitHub Page 만들기', checked: true }
    ],
    color: ''
  }

  handleChange = (e) => {
    this.setState({
      // input 태그에 입력된 값을 state의 input으로 넘긴다.
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      // input을 비운다. 🤔? 빈 값이 배열에 추가되는 건 아닐까?
      input: '',
      // 기존의 todos 배열에 값을 추가하여 새로운 배열을 반환한다.
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
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
        form={(
          <Form 
            value={ input }
            onKeyPress={ handleKeyPress }
            onChange={ handleChange }
            onCreate={ handleCreate }
            color={ color } />
        )} 
        items={(
          <TodoItemList 
            todos={ todos }
            onToggle={ handleToggle }
            onRemove={ handleRemove } />
        )}
        palette={(
          <Palette colors={ colors } selected={ color } onSelect={ handleSelectColor } />
        )} />
    );
  }

}

export default App;
