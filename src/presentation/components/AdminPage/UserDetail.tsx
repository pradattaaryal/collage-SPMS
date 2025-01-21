import React, { useState } from "react";
import { useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
}

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Dummy data for users
  const users: User[] = [...Array(10)].map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    faculty: "BIM",
    fatherName: `Father ${index + 1}`,
    phone: `98072695${index + 20}`,
    email: `user${index + 1}@example.com`,
    image: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`, // Unique dummy image URL
  }));

  // Find the user based on the ID
  const user = users.find((user) => user.id === parseInt(id || "0"));

  // Tab state
  const [activeTab, setActiveTab] = useState("academic");

  if (!user) {
    return <p>User not found!</p>;
  }

  // Dummy data for each tab
  const academicData = {
    course: "BCA",
    gpa: 4.0,
    joined: 2017,
    ended: 2022,
    semester: "6th",
    scholarship: "Gold",
  };

  const ccaData = {
    activities: "Debate, Music Club, Football Team",
    awards: "Best Debater 2021",
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
    <div className="p-8 bg-white h-[80%] border-2 rounded-xl shadow-2xl min-h-screen">
      {/* User Info */}
      <div className="flex items-center bg-white shadow-md p-6 rounded-md mb-6">
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full h-32 w-32 mr-8"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Father's Name:</strong> {user.fatherName}
          </p>
          <p>
            <strong>Faculty:</strong> {user.faculty}
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-red-500 shadow-md rounded-md">
      <div className="flex justify-center items-center rounded-t-md bg-background border-b">
  {["academic", "cca", "projects", "certifications", "linkedin"].map((tab, index) => (
    <button
      key={tab}
      className={`px-[48px] py-[20px] w-full text-center transition-all duration-100 ${
        activeTab === tab ? "bg-primary text-white" : "text-primary"
      } ${index === 0 ? "rounded-tl-md" : ""} ${
        index === 4 ? "rounded-tr-md" : ""
      }`}
      onClick={() => setActiveTab(tab)}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  ))}
</div>


        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "academic" && (
            <div>
              <h3 className="font-bold mb-2">Academic Details</h3>
              <p>Section: {academicData.course}</p>
              <p>GPA: {academicData.gpa}</p>
              <p>Joined: {academicData.joined}</p>
              <p>Ended: {academicData.ended}</p>
              <p>Semester: {academicData.semester}</p>
              <p>Scholarship: {academicData.scholarship}</p>
            </div>
          )}

          {activeTab === "cca" && (
            <div>
              <h3 className="font-bold mb-2">CCA/ECA Activities</h3>
              <p>Activities: {ccaData.activities}</p>
              <p>Awards: {ccaData.awards}</p>
            </div>
          )}

          {activeTab === "projects" && (
            <div>
              <h3 className="font-bold mb-2">Projects</h3>
              <ul>
                {projectsData.map((project, index) => (
                  <li key={index}>
                    {project.title} ({project.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "certifications" && (
            <div>
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
          )}

          {activeTab === "linkedin" && (
            <div>
              <h3 className="font-bold mb-2">LinkedIn Profile</h3>
              <a href={linkedInProfile} target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
