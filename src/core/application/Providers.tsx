import React from "react";
 import  TodoRepositoryProvider  from "./provider/TodoRepositoryProvider";
import StudentRepositoryProvider from "./provider/StudentRepositoryProvider";

const Providers = ({children,}: {  children: React.ReactNode;}) => {


  return (
    <>
    <StudentRepositoryProvider>
    <TodoRepositoryProvider>
      {children}
    </TodoRepositoryProvider>
    </StudentRepositoryProvider>
    </>
  );
};

export default Providers;
