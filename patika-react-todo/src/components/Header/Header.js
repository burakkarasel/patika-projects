import React from "react";
import { Form } from "./Form/Form";

export const Header = ({ todos, setTodos }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <Form todos={todos} setTodos={setTodos} />
    </header>
  );
};
