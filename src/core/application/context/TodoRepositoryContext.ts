import { createContext } from "react";
import TodoRepository from "../../../infrastructure/repository/TodoRepository";

export const TodoRepositoryContext = createContext<TodoRepository | undefined>(undefined);
