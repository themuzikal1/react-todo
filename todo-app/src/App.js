import React, { useState } from "react";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={() => removeTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <form action="/" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

      </form>
    </>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Wash Car",
      isCompleted: false,
    },
    {
      text: "Get cat food for Luna",
      isCompleted: false,
    },
    {
      text: "Hang new curtains",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Title />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <button input type="reset" className=" btn btn-dark btn-lg">
        Reset
      </button>
    </div>
  );
}
export default App;
