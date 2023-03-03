import React, { useState } from "react";

const initialFormValues = { todo: "", done: false };

export const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState(initialFormValues);
  const onSubmitHandler = (e) => {
    if (todo.todo !== "") {
      setTodos([...todos, todo]);
    }
    e.preventDefault();
    setTodo(initialFormValues);
    console.log(todos);
  };

  const onChangeHandler = (e) => {
    setTodo({ [e.target.name]: e.target.value, done: false });
    console.log(todo);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        name="todo"
        value={todo.todo || ""}
        onChange={onChangeHandler}
      />
    </form>
  );
};
