import React from 'react';
import './TodoTemplate.css';

const TodoTemplate = ({ colors, form, items }) => {
  return (
    <main className="todo-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="palette-wrapper">
        { colors }
      </section>
      <section className="form-wrapper">
        { form }
      </section>
      <section className="todos-wrapper">
        { items }
      </section>
    </main>
  );
};

export default TodoTemplate;