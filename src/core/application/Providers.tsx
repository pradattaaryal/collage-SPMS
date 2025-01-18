import React from "react";
 import  TodoRepositoryProvider  from "./provider/TodoRepositoryProvider";

const Providers = ({children,}: {  children: React.ReactNode;}) => {


  return (
    <>
    <TodoRepositoryProvider>
      {children}
    </TodoRepositoryProvider>
    </>
  );
};

export default Providers;
