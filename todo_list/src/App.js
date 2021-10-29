import React, { Component } from 'react';
import InputItem from './components/InputItem';
import TodoTemplate from './components/TodoTemplate';

class App extends Component {
  render() {
    return (
      <TodoTemplate inputItem={ <InputItem /> }>
        <div>itemList</div>
      </TodoTemplate>
    );
  }
}

export default App;
