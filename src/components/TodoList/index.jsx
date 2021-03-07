import PropTypes from 'prop-types';
import React from 'react';

function Todolist(props) {
  const { todos, onclickTodo } = props;

  function handleClickTodo(todo){
    if (onclickTodo) {
      onclickTodo(todo);
    }
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClickTodo(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

Todolist.propTypes = {
  todos: PropTypes.array,
  onclickTodo: PropTypes.func,
};

Todolist.defaultProps = {
  todos: [],
  onclickTodo: null,
};

export default Todolist;
