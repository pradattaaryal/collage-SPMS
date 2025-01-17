import React from "react";
import TodoRepository from "../../infrastructure/repository/TodoRepository";
import { TodoContext } from "./context/TodoContext";

const TodoRepositoryProvider = ({children,}: {  children: React.ReactNode;}) => {
  const todoRepository = new TodoRepository();

  return (
    <TodoContext.Provider value={todoRepository}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoRepositoryProvider;
