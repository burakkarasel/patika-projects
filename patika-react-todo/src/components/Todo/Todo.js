import React, { useState } from "react";

export const Todo = ({ todo, done, todos, setTodos }) => {
  const [currentTodo, setCurrentTodo] = useState({ todo: todo, done: done });
  const clickToDestroy = () => {
    const filteredTodos = todos.filter((item) => item.todo !== todo);
    setTodos(filteredTodos);
  };
  const onClickHandler = () => {
    currentTodo.done = !done;
    done = !done;
    setCurrentTodo(currentTodo);
    const updatedTodos = todos.map((item) => {
      if (item.todo === todo) {
        item.done = done;
      }
      return item;
    });
    setTodos(updatedTodos);
  };
  return (
    <li className={done ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          checked={done}
          type="checkbox"
          onClick={onClickHandler}
          onChange={() => (done = !done)}
        />
        <label>{todo}</label>
        <button className="destroy" onClick={clickToDestroy}></button>
      </div>
    </li>
  );
};
