import React, { useState } from "react";
import UserTable from "./UserTable";
import HoverUserDetails from "./HoverUserDetails";
 import { Student } from "../../../core/domain/entity/Student.entity";
const ManageUser: React.FC = () => {
  const [hoveredUser, setHoveredUser] = useState<Student | null>(null);

  return (
  
      <div className="flex max-h-screen  gap-6">
        
        <div className="lg:md:w-3/4 w-full ">
          <UserTable onUserHover={setHoveredUser} />
        </div>

         
        <div className="lg:w-1/4   lg:block hidden    rounded-xl border-2 border-black ">
         <HoverUserDetails user={hoveredUser}/>
          
        </div>
      </div>
    
  );
};

export default ManageUser;