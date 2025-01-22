import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import AddStudentForm from "./presentation/components/form/AddStudentForm";
import AddNotice from "./presentation/components/AdminPage/AddNotice";
 
// Lazy Loading Components
const Login = React.lazy(() => import("./presentation/pages/LoginPage/LoginPage"));
const AdminPage = React.lazy(() => import("./presentation/pages/AdminPage/AdminPage"));
const ManageUser = React.lazy(() => import("./presentation/components/AdminPage/ManageUser"));
const UserDetail = React.lazy(() => import("./presentation/components/AdminPage/UserDetail"));

function App() {
  return (
    <div className="flex flex-col  ">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={ <Login/>} />
          <Route path="/d" element={<AddStudentForm/>} />


          

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPage />}>
            <Route index element={<ManageUser />} /> {/* Default child route */}
            <Route path="manageuser" element={<ManageUser/>} />
            <Route path="manageuser/adduser" element={<AddStudentForm />} />
            <Route path="notice" element={<AddNotice />} />
            <Route path="/admin/user/:id" element={<UserDetail />} />
          </Route>

          {/* User Details (Standalone Route) */}
          

          {/* Fallback for undefined routes */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
