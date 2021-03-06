import React from 'react';
import './TodoTemplate.css';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TodoTemplate = ({ form, items, palette }) => {
  return (
    <main className="todo-template">
      <Link className="user-info" to="./user">
        <FaUserCircle />
      </Link>
      <div className="title">
        오늘의 할 일
      </div>
      <section className="palette-wrapper">
        { palette }
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