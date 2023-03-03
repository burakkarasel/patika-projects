import React from "react";
import { Todo } from "../Todo/Todo";

export const List = ({ todos, setTodos, filter }) => {
  let filteredTodos;
  if (filter === "Completed") {
    filteredTodos = todos.filter((item) => item.done === true);
  } else if (filter === "Active") {
    filteredTodos = todos.filter((item) => item.done === false);
  } else {
    filteredTodos = todos;
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredTodos.map((item, index) => (
          <Todo
            key={index}
            todo={item.todo}
            done={item.done}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </section>
  );
};
