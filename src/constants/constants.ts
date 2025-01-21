export const CURRENT_BASE_URL = "https://localhost:7093/api";
export const CURRENT_BASE_URL_image = "https://localhost:7093/";
export const SEMESTERS = ["1", "2", "3", "4","5","6","7","8"];
export const GENDERS = ["Male","Female","Others"];
export const FACULTY = ["BIM","BCA","BBS","MBA"];
export const ORDER = ["ASC","DES"];
export const courseData = [
    {
      name: "BIM",
      semesters: Array.from({ length: 8 }, (_, index) => `Semester ${index + 1}`), // 8 Semesters
      years: Array.from({ length: 12 }, (_, index) => `${2070 + index}`), // 2070 to 2081
    },
    {
      name: "BCA",
      semesters: Array.from({ length: 8 }, (_, index) => `Semester ${index + 1}`), // 8 Semesters
      years: Array.from({ length: 12 }, (_, index) =>  `${2070 + index}`), // 2070 to 2081
    },
    {
      name: "BBS",
      semesters: Array.from({ length: 4 }, (_, index) => `Year ${index + 1}`), // 4 Years
      years: Array.from({ length: 12 }, (_, index) =>  `${2070 + index}`), // 2070 to 2081
    },
    {
      name: "MBA",
      semesters: Array.from({ length: 2 }, (_, index) => `Year ${index + 1}`), // 2 Years
      years: Array.from({ length: 12 }, (_, index) => `${2070 + index}`), // 2070 to 2081
    },
  ];
  