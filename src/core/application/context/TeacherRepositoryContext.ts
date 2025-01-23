import { createContext } from "react";
 import TeacherRepository from "../../../infrastructure/repository/TeacherRepository";

export const TeacherRepositoryContext = createContext<TeacherRepository | undefined>(undefined);
