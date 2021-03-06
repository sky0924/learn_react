import React, { Component } from 'react';
import Form from '../components/Form';
import Palette from '../components/Palette';
import TodoItemList from '../components/TodoItemList';
import TodoTemplate from '../components/TodoTemplate';

const colors = ['#000000','#1d3557', '#6b705c', '#ff6b6b'];

class App extends Component {

  /*
  ๐ฏ! id = 7
    id์ ์ด๊ธฐ๊ฐ์ ์ ์ค์ ํด์ฃผ๋ ๊ฑธ๊น? 
    -> ๋ง์ง๋ง id ๊ฐ์ ์ ์ ์๊ธฐ ๋๋ฌธ์
    -> todos.length๋ก ํญ์ ๋ง์ง๋ง์ id ๊ฐ์ด ์ธํ๋๋๋ก ํจ
  */

  state = {
    input: '',
    todos: [
      { id: 0, text: 'ํ  ์ผ 1. Redux ์ดํด ๋ฐ ์ ์ฉํ๊ธฐ โญ๏ธโญ๏ธโญ๏ธโญ๏ธโญ๏ธ', checked: false },
      { id: 1, text: 'ํ  ์ผ 2. react-router-dom ์ด์ฉํ๊ธฐ โญ๏ธโญ๏ธโญ๏ธ', checked: true },
      { id: 2, text: 'ํ  ์ผ 3. image upload ๊ธฐ๋ฅ ๊ตฌํํ๊ธฐ โญ๏ธโญ๏ธ', checked: true },
      { id: 3, text: 'ํ  ์ผ 4. color ์ถ๊ฐ ๋ฐ ์ญ์  ๊ธฐ๋ฅ ๊ตฌํํ๊ธฐ', checked: false },
      { id: 4, text: 'ํ  ์ผ 5. user id ๋ฐ password ์๋ ฅ form ๋ง๋ค๊ธฐ โญ๏ธ', checked: true },
      { id: 5, 
        text: `ํ  ์ผ 6. ๋ ์ค์ด ๋์ด๊ฐ๋ฉด ์ด๋ป๊ฒ ๋๋์ง ํ์คํธํ  ์์ฃผ ๊ธธ๋ค๋๊ณ  ๊ธธ๋ค๋ ๋ฌธ์ฅ, 
          ํฌ๊ฒ ๋์์ง ์์๋ฐ check-mark๊ฐ toggle ์ ํ๋  ๋๋ง๋ค items์ width๊ฐ ๋ณํํจ`, 
        checked: true },
      { id: 6, text: 'ํ  ์ผ 7. GitHub Page ๋ง๋ค๊ธฐ', checked: true }
    ],
    color: ''
  }

  // ๐ฏ! input ํ๊ทธ์ ์๋ ฅ๋ ๊ฐ์ state์ input์ผ๋ก ๋๊ธด๋ค.
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  /*
  ๐ฏ!
    input: '' 
    -> input์ ๋น์ด๋ค.(์ด๊ธฐํ)

    ๊ทธ๋ฌ๋ฉด ๋น ๊ฐ์ธ ์ํ๋ก ๋ฐฐ์ด์ ์ถ๊ฐ๋์ง ์์๊น? 
    -> ๋ฐฐ์ด์ ์ถ๊ฐ๋๋ ๊ฐ์ฒด์๋ text: input์ผ๋ก state์์ ๊ฐ์ ๋ถ๋ฌ์ ๋ฃ์ด์ฃผ๊ณ ,
      ๋น์์ง๋ input์ ์ค์ ๋ก ์ฌ์ฉ์๋ค์ด ์๋ ฅํ๋ input ํ๊ทธ๋ฅผ ๋งํ๋ค.
    
    todos.concat(...) 
    -> ๊ธฐ์กด์ ๋ฐฐ์ด์ ์๋ก์ด ๊ฐ์ฒด๋ฅผ ์ถ๊ฐํ ์๋ก์ด ๋ฐฐ์ด์ ๋ฐํํ๋ค.
  */
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: todos.length,
        text: input,
        checked: false,
        color
      })
    });
  }

  // ๐ฏ! Enter ํค๋ฅผ ๋๋ฌ๋ Create ๋ฒํผ์ ๋๋ฅธ ๊ฒ๊ณผ ๊ฐ์ด ๋์ํ๋ค.
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  // ๐ค? ์ด์ง๋ฝ๋ค.
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
      <>
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
        </>
    );
  }

}

export default App;
