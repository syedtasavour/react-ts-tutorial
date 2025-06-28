import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete, MdEdit, MdClose } from "react-icons/md";
import { Todo } from "./model";
import "./styles.css";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>(todo.task);

  const updateTodos = (updated: Todo[]) => {
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const handleDone = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(updatedTodos);
  };

  const handleEditSubmit = (e?: React.FormEvent, idOverride?: number) => {
    if (e) e.preventDefault();
    const id = idOverride ?? todo.id;

    if (editText.trim().length === 0) {
      setIsEditing(false);
      return;
    }

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: editText.trim() } : todo
    );
    updateTodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <form
      className="todos__single"
      onSubmit={(e) => handleEditSubmit(e, todo.id)}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="todos__single--input clean"
          autoFocus
          onBlur={() => handleEditSubmit(undefined, todo.id)}
        />
      ) : (
        <span className="todos__single--text">
          {todo.completed ? (
            <>
              ✔️ <s>{todo.task}</s>
            </>
          ) : (
            <>❌ {todo.task}</>
          )}
        </span>
      )}

      <div>
        {/* Edit / Save toggle */}
        <span
          className="icon"
          onClick={() => {
            if (isEditing) {
              handleEditSubmit(undefined, todo.id);
            } else {
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? <FaCheck /> : <MdEdit />}
        </span>

        {/* Delete */}
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>

        {/* Done toggle: show only when NOT editing */}
        {!isEditing && (
          <span className="icon" onClick={() => handleDone(todo.id)}>
            {todo.completed ? <MdClose /> : <FaCheck />}
          </span>
        )}
      </div>
    </form>
  );
};

export default SingleTodo;
