import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux" className="container">
      <h2 className="my-3">Todo List</h2>
      <ul className="list-group">
      <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}