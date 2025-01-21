import React, { useState, useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoIosSearch, IoMdAdd } from "react-icons/io";
import { AiOutlineDownload } from "react-icons/ai";
import { courseData } from "../../../constants/constants";
import UserRow from "../../ui/UserRow";
import Dropdown from "../../ui/Dropdown";
import Pagination from "../../ui/Pagination";
import AddStudentForm from "../form/AddStudentForm";
import { StudentRepositoryContext } from "../../../core/application/context/StudentRepositoryContext";
import { Student } from "../../../core/domain/entity/Student.entity";

interface UserTableProps {
  onUserHover: (user: Student) => void;
}

interface StudentFormData {
  course: string;
  year: string;
  semester: string;
}

const UserTable: React.FC<UserTableProps> = ({ onUserHover }) => {
  const [users, setUsers] = useState<Student[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<StudentFormData>();

  const onSubmit: SubmitHandler<StudentFormData> = (data) => {
    console.log("Form submitted:", data);
  };

  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleExport = () => {
    const selectedData = users.filter((user) => selectedRows.includes(user.id));
    if (selectedData.length === 0) {
      alert("No users selected for export.");
      return;
    }
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Image,ID,Name,Role,Faculty,Father Name,Phone,Email,Course,Year"]
        .concat(
          selectedData.map(
            (user) =>
              `${user.imageUrl},${user.id},${user.name},${user.faculty},${
                user.fatherName
              },${user.phoneNo},${user.email},${user.semester || "N/A"},${
                user.gender || "N/A"
              }`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "selected_users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const selectedCourseData = courseData.find(
    (course: any) => course.name === watch("course")
  );
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // Pagination logic
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1); // Reset to first page when page size changes
  };

  const StudentRepository = useContext(StudentRepositoryContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await StudentRepository?.GetAllStudent();
        if (response?.succeeded && response.data) {
          const formattedData = response.data.map((item: any) => ({
            id: item.Id,
            name: item.Name,
            fatherName: item.FatherName,
            motherName: item.MotherName,
            gender: item.Gender,
            email: item.Email,
            phoneNo: item.PhoneNo,
            imageUrl: item.ImageUrl, // Assuming this exists
          }));
          setUsers(formattedData);
          console.log(formattedData);
        } else {
          alert("Failed to fetch students");
        }
      } catch (error) {
        alert("An error occurred while fetching data");
      }
    };
    fetchData();
  }, [StudentRepository]);

  return (
    <div className="shadow-md h-[690px]    rounded p-4">
      {/* Filters and Buttons */}
      <div className="flex items-center justify-between gap-2 mb-4">
        {/* Select Dropdown */}
        <select className="p-2 h-[48px] w-[120px] border-2 border-background rounded">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        {/* Search Bar */}
        <div className="flex items-center w-full border-2 border-black rounded-3xl px-4 h-[52px]">
          <IoIosSearch className="text-gray-500 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search Student ..."
            className="flex-grow bg-transparent outline-none"
          />
        </div>

        {/* Export Button */}
        <div>
          <button
            onClick={handleExport}
            className="flex max-w-[100px] w-full items-center h-[44px] gap-1 px-4 py-2 bg-hover text-white rounded-lg hover:bg-blue-700 
                 sm:w-[80px] sm:h-[40px] sm:px-2 sm:gap-0"
          >
            Export
            <AiOutlineDownload className="w-6 h-6 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Add Button */}
        <div>
          <button
            onClick={() => setIsPopupVisible(true)}
            className="flex w-[100px] justify-evenly items-center h-[44px] gap-1 px-4 py-2 bg-hover text-white rounded-lg hover:bg-blue-700 
                 sm:w-[80px] sm:h-[40px] sm:px-2 sm:gap-0"
          >
            Add
            <IoMdAdd className="w-5 h-5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black  bg-opacity-50   flex justify-center items-center z-50">
          <div className="bg-white  w-[871px]">
            {" "}
            <AddStudentForm />
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between  h-[60px] items-center rounded-xl px-4  bg-[#E9E9E9] mb-4">
          <div className="flex">
            <div className=" ">
              <Dropdown
                name="course"
                defaultOption="course"
                options={courseData.map((course) => course.name)}
                handleChange={(value) => setValue("course", value)}
              />
            </div>
            <div className="ml-2">
              <Dropdown
                name="semester"
                defaultOption="Sem"
                options={selectedCourseData ? selectedCourseData.semesters : []}
                handleChange={(value) => setValue("semester", value)}
              />
            </div>
            <div className="ml-2">
              <Dropdown
                name="year"
                defaultOption="Year"
                options={selectedCourseData ? selectedCourseData.years : []}
                handleChange={(value) => setValue("year", value)}
              />
            </div>
          </div>
          <div>
            <div className="ml-2">
              <Dropdown
                name="Order"
                defaultOption="Order"
                options={selectedCourseData ? selectedCourseData.years : []}
                handleChange={(value) => setValue("year", value)}
              />
            </div>
          </div>
        </div>
      </form>

      {/* Table */}
      <div className=" overflow-auto scrollbar-none  h-[450px]  ">
        <table className="table-auto w-full border-collapse">
          <thead className=" sticky top-0 ">
            <tr className="bg-gray-200 text-left align-middle rounded-t-xl    ">
              <th className="p-2 border-b  rounded-tl-lg text-center ">
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th className="p-3 border-b text-center">Image</th>
              <th className="p-3 border-b text-center"> Email</th>
              <th className="p-3 border-b text-center">Name</th>

              <th className="p-3 border-b text-center">Phone</th>
              <th className="p-3 border-b   text-center   rounded-tr-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {users.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                isSelected={selectedRows.includes(user.id)}
                onSelectRow={() => handleSelectRow(user.id)}
                onHover={(hoveredUser:Student) => onUserHover(hoveredUser)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default UserTable;
