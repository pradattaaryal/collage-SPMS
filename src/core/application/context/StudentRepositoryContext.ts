import { createContext } from "react";
 import StudentRepository from "../../../infrastructure/repository/StudentRepository";

export const StudentRepositoryContext = createContext<StudentRepository | undefined>(undefined);
