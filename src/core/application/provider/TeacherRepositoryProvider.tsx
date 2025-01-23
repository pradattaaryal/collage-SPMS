import React from "react";
import TeacherRepository from '../../../infrastructure/repository/TeacherRepository';
import { TeacherRepositoryContext } from "../context/TeacherRepositoryContext";

const TeacherRepositoryProvider = ({ children }: { children: React.ReactNode }) => {
  const teacherRepository  = new TeacherRepository();

  return (
    <TeacherRepositoryContext.Provider value={teacherRepository }>
      {children}
    </TeacherRepositoryContext.Provider>
  );
};

export default TeacherRepositoryProvider;
