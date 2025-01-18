import React from "react";
import TodoRepository from "../../../infrastructure/repository/TodoRepository";
import { TodoRepositoryContext } from "../context/TodoRepositoryContext";

const TodoRepositoryProvider = ({ children }: { children: React.ReactNode }) => {
  const todoRepository = new TodoRepository();

  return (
    <TodoRepositoryContext.Provider value={todoRepository}>
      {children}
    </TodoRepositoryContext.Provider>
  );
};

export default TodoRepositoryProvider;
