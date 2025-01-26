import React from "react";
 import  TodoRepositoryProvider  from "./provider/TodoRepositoryProvider";
import StudentRepositoryProvider from "./provider/StudentRepositoryProvider";
 import TeacherRepositoryProvider from "./provider/TeacherRepositoryProvider";

const Providers = ({children,}: {  children: React.ReactNode;}) => {


  return (
    <>
    
     <TeacherRepositoryProvider>
    <StudentRepositoryProvider>
    <TodoRepositoryProvider>
      {children}
    </TodoRepositoryProvider>
    </StudentRepositoryProvider>
    </TeacherRepositoryProvider>     
    </>
  );
};

export default Providers;
