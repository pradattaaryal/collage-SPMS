import { createContext } from "react";
import TodoRepository from "../../../infrastructure/repository/TodoRepository";

export const TodoContext = createContext<TodoRepository | undefined>(undefined);
