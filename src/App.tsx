import React, { useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();
  if (!todo.trim()) return;

  const newTodo = { id: Date.now(), task: todo.trim(), completed: false };
  const updatedTodos = [...todos, newTodo];

  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  setTodo("");
};

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);



  return (
    <div className="App">
      <span className="heading">Todo List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* You can add more components or features here */}
    </div>
  );
};

export default App;
