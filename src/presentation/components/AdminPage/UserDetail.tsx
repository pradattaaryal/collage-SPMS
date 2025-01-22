import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Student } from "../../../core/domain/entity/Student.entity";
import { StudentRepositoryContext } from "../../../core/application/context/StudentRepositoryContext";
import { CURRENT_BASE_URL_image, dummyData, CardData } from "../../../constants/constants";
import CardRow from "../../ui/CardRow";

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const StudentRepository = useContext(StudentRepositoryContext);
  const [carddata, setcarddata] = useState<CardData[] | null>(null);
  const [activeTab, setActiveTab] = useState("cca");
  const [user, setUser] = useState<Student | null>(null);

  const transformStudentData = (data: any): Student => ({
    id: data.Id,
    name: data.Name,
    fatherName: data.FatherName,
    motherName: data.MotherName,
    gender: data.Gender,
    email: data.Email,
    phoneNo: data.PhoneNo,
    imageUrl: data.ImageUrl,
    faculty: data.Faculty,
    semester: data.Semester,
    dob: data.DoB,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const fetchedUser = await StudentRepository?.getStudentDateById(id);
          if (fetchedUser?.succeeded && fetchedUser?.data) {
            const formattedData = transformStudentData(fetchedUser.data);
            setUser(formattedData);
            setcarddata(dummyData);
            console.log(formattedData);
          } else {
            console.error("Failed to fetch user data or invalid response:", fetchedUser);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [id, StudentRepository]);

  if (!user) {
    return <p>User not found!</p>;
  }

  // Dummy data for tabs
  const academicData = {
    course: "BCA",
    gpa: 4.0,
    joined: 2017,
    ended: 2022,
    semester: "6th",
    scholarship: "Gold",
  };

  const projectsData = [
    { title: "E-commerce Website", year: 2021 },
    { title: "Library Management System", year: 2022 },
  ];

  const certificationsData = [
    { name: "React Development", issuer: "Udemy", year: 2022 },
    { name: "Python for Data Science", issuer: "Coursera", year: 2021 },
  ];

  const linkedInProfile = "https://linkedin.com/in/user-profile";

  return (
    <div className="md:h-[700px]  flex flex-col border-2 h-screen  rounded-xl shadow-2xl">
      {/* User Info */}
      <div className="flex items-center bg-background shadow-md p-6 rounded-md mb-6">
        <img
          src={`${CURRENT_BASE_URL_image}/${user.imageUrl}`}
          alt={user.name}
          className="rounded-md border-2 border-black h-36 w-36 mr-8"
        />
        <div>
          <h2 className=" sm:text-base md:text-lg lg:text-xl font-bold">{user.name}</h2>
          <p >
            <strong className="md:text-custom-18  sm:text-[20px] text-[15px]">Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phoneNo}
          </p>
          <p>
            <strong>Father's Name:</strong> {user.fatherName}
          </p>
          <p>
            <strong>Faculty:</strong> {user.faculty || "N/A"}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="h-[580px] shado w-md rounded-md overflow-hidden">
        <div className="sticky top-0   flex justify-center items-center border-b z-10">
          {["academic", "cca", "projects", "certifications", "linkedin"].map(
            (tab, index, allTabs) => (
              <button
                key={tab}
                className={`px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-12 xl:py-6   border-2 border-b-primary w-full text-center transition-all duration-100 ${
                  activeTab === tab ? "bg-primary  text-white" : "text-primary"
                } ${index === 0 ? "rounded-tl-md" : ""} ${
                  index === allTabs.length - 1 ? "rounded-tr-md" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="h-[100%]   overflow-auto  scrollbar-none">
          <div
            className={
              activeTab === "academic"
                ? "flex flex-col justify-around p-6 text-custom-28"
                : "hidden"
            }
          >
            <h3 className="font-bold mb-2">Academic Details</h3>
            <p>Section: {academicData.course}</p>
            <p>GPA: {academicData.gpa}</p>
            <p>Joined: {academicData.joined}</p>
            <p>Ended: {academicData.ended}</p>
            <p>Semester: {academicData.semester}</p>
            <p>Scholarship: {academicData.scholarship}</p>
          </div>

          <button className=" absolute right-[50px] mt-6 rounded-lg px-4 shadow-black shadow-2xl  hover:bg-hover text-custom-36 bg-primary "><p>+</p></button>

          <div className={activeTab === "cca" ? "flex   p-2   " : "hidden"}>
            <CardRow data={carddata || []} />
          </div>

          <div
            className={activeTab === "projects" ? "bg-red-400" : "hidden"}
          >
            <h3 className="font-bold mb-2">Projects</h3>
            <ul>
              {projectsData.map((project, index) => (
                <li key={index}>
                  {project.title} ({project.year})
                </li>
              ))}
            </ul>
          </div>

          <div
            className={activeTab === "certifications" ? "bg-red-400" : "hidden"}
          >
            <h3 className="font-bold mb-2">Certifications</h3>
            <ul>
              {certificationsData.map((certification, index) => (
                <li key={index}>
                  {certification.name} ({certification.year}) from{" "}
                  {certification.issuer}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={activeTab === "linkedin" ? "bg-red-400" : "hidden"}
          >
            <h3 className="font-bold mb-2">LinkedIn Profile</h3>
            <a href={linkedInProfile} target="_blank" rel="noopener noreferrer">
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
