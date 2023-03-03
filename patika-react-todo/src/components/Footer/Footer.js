import React, { useState } from "react";

export const Footer = ({ todos, setFilter, setTodos }) => {
  const [isAllSelected, setIsAllSelected] = useState(true);
  const [isCompletedSelected, setIsCompletedSelected] = useState(false);
  const [isActiveSelected, setIsActiveSelected] = useState(false);

  const setFilterActive = () => {
    setFilter("Active");
    setIsAllSelected(false);
    setIsCompletedSelected(false);
    setIsActiveSelected(true);
  };
  const setFilterAll = () => {
    setFilter("All");
    setIsAllSelected(true);
    setIsCompletedSelected(false);
    setIsActiveSelected(false);
  };
  const setFilterFinished = () => {
    setFilter("Completed");
    setIsAllSelected(false);
    setIsCompletedSelected(true);
    setIsActiveSelected(false);
  };

  const clearCompletedHandler = () => {
    const filteredTodos = todos.filter((item) => !item.done);
    setTodos(filteredTodos);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{`${todos.length} `}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={isAllSelected ? "selected" : ""}
            onClick={setFilterAll}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={isActiveSelected ? "selected" : ""}
            onClick={setFilterActive}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={isCompletedSelected ? "selected" : ""}
            onClick={setFilterFinished}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompletedHandler}>
        Clear completed
      </button>
    </footer>
  );
};
