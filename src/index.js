import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(result => result.json())
      .then(data => setTodos(data.splice(0, 15)));
  }, []);

  const del = id => {
    setTodos(todos.filter(t => t.id !== id));
  };
  const renderTodos = todos.map(t => (
    <li key={t.id}>
      {t.title} <button onClick={() => del(t.id)}>x</button>
    </li>
  ));

  return (
    <div className="App">
      <p>React is Cool!</p>
      {todos.length === 0
        ? "There are no todos"
        : `There are ${todos.length} todos`}
      {renderTodos}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
