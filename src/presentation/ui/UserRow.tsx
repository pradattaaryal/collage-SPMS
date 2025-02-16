import React, { useContext } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Student } from "../../core/domain/entity/Student.entity";
import { CURRENT_BASE_URL_image } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { StudentRepositoryContext } from "../../core/application/context/StudentRepositoryContext";

interface UserRowProps {
  user: Student;
  isSelected: boolean;
  onHover: (user: Student) => void;
  onSelectRow: () => void; // Add this
}

const UserRow: React.FC<UserRowProps> = ({
  user,
  isSelected,
  onHover,
  onSelectRow,
}) => {
  const StudentRepository = useContext(StudentRepositoryContext);

  const DeleteStudent = async (id: string) => {
    try {
      await StudentRepository?.deletestudents(id); // Pass `id` to the repository's delete method
      alert("Student deleted successfully!");
      window.location.reload();
    } catch (error: any) {
      console.error("Error:", error.message);
      alert(`Error deleting student: ${error.message}`);
    }
  };

  const navigate = useNavigate();

  return (
    <tr
      className="hover:bg-gray-100 cursor-pointer"
      onMouseEnter={() => onHover(user)}
    >
      <td className="p-2 border-b text-center">
        <input type="checkbox" checked={isSelected} onChange={onSelectRow} />
      </td>

      <td
        onClick={() => navigate(`/admin/user/${user.id}`)}
        className="border-b text-center  "
      >
        <img
          src={`${CURRENT_BASE_URL_image}/` + `${user.imageUrl}`}
          alt={user.name}
          className="rounded-full mx-auto h-8 w-8"
        />
      </td>
      <td
        onClick={() => navigate(`/admin/user/${user.id}`)}
        className="border-b text-center "
      >
        {user.name}
      </td>
      <td
        onClick={() => navigate(`/admin/user/${user.id}`)}
        className="border-b text-center "
      >
        {user.email}
      </td>

      <td
        onClick={() => navigate(`/admin/user/${user.id}`)}
        className="border-b text-center"
      >
        {user.phoneNo}
      </td>
      <td className="border-b text-center   ">
        <button className="px-2 py-1 text-hover    rounded  hover:bg-blue-500 hover:text-white ">
          <BiEdit className="w-6 h-6" />
        </button>
        <button
          onClick={() => DeleteStudent(user.id.toString())}
          className="px-2 py-1  text-red-500 rounded  hover:bg-red-500 hover:text-white "
        >
          <RiDeleteBin6Line className="w-6 h-6" />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
