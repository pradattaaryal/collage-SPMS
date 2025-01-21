import React from "react";
import { Student } from "../../../core/domain/entity/Student.entity";
import { CURRENT_BASE_URL_image } from "../../../constants/constants";



interface UserDetailsProps {
  user: Student;
}

const HoverUserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  if (!user) {
    return <div className="p-4 hidden    text-gray-500">Hover over a user to see details</div>;
  }

  return (
    <div className="p-6 h-full flex   flex-col     justify-between rounded-lg shadow-md   mx-auto text-center">
      {/* User ID */}
      <p className="text-sm text-gray-500 font-semibold mb-4">{user.id}</p>

      {/* Profile Image */}
      <img
        src={`${CURRENT_BASE_URL_image}/`+`${user.imageUrl}`}
       
        className="rounded-full h-24 w-24 mx-auto mb-4"
      />

      {/* User Name and Faculty */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{user.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{user.faculty}</p>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          📚
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          📞
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          ✉️
        </button>
      </div>

      {/* About Section */}
      <div className="text-left">
        <p className="text-sm mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-sm mb-2">
          <strong>Phone:</strong> {user.phoneNo}
        </p>
        <p className="text-sm mb-2">
          <strong>Father's Name:</strong> {user.fatherName}
        </p>
        <p className="text-sm mb-2">
          <strong>Age:</strong> {user.dob}
        </p>
        <p className="text-sm mb-2">
          <strong>Gender:</strong> {user.gender}
        </p>
      </div>

 
    </div>
  );

  {
    return (
      <div className="p-6 h-full flex flex-col justify-between rounded-lg shadow-md mx-auto text-center animate-pulse">
        {/* Skeleton User ID */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-4"></div>

        {/* Skeleton Profile Image */}
        <div className="rounded-full h-24 w-24 bg-gray-300 mx-auto mb-4"></div>

        {/* Skeleton Name and Faculty */}
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>

        {/* Skeleton Action Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        </div>

        {/* Skeleton About Section */}
        <div className="text-left">
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
        </div>
      </div>
    );
  }

};

export default HoverUserDetails;
