import Header from "../../components/AdminPage/Header";
import Sidebar from "../../components/AdminPage/Sidebar";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  
  return (
    <div className="flex">

      <Sidebar />
      <div className=" flex flex-col  w-full">
      <Header/>
      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet />  
      </div>
      </div>
    </div>
  );
};

export default AdminPage;
