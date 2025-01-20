import React from "react";
import StudentRepository from '../../../infrastructure/repository/StudentRepository'
import { StudentRepositoryContext } from "../context/StudentRepositoryContext";

const StudentRepositoryProvider = ({ children }: { children: React.ReactNode }) => {
  const studentRepository = new StudentRepository();

  return (
    <StudentRepositoryContext.Provider value={studentRepository}>
      {children}
    </StudentRepositoryContext.Provider>
  );
};

export default StudentRepositoryProvider;
