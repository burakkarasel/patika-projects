import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    console.log("todos updated");
    console.log(todos);
  }, [todos]);
  return (
    <div className="todoapp">
      <Header todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} filter={filter} />
      <Footer todos={todos} setFilter={setFilter} setTodos={setTodos} />
    </div>
  );
}

export default App;
