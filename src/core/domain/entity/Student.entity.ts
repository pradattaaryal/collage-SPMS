export interface Student {
  id: number;
  name: string;
  fatherName: string;
  motherName: string;
  gender: string;
  email: string;
  phoneNo: string;
  imageUrl?: string;
  dob?: string; // Optional if not always provided
  faculty?: string; // Optional
  semester?: string; // Optional
  password?:string;
}
export const students: Student[] = [
  {
    id: 1,
    name: "John Doe",
    fatherName: "Michael Doe",
    motherName: "Sarah Doe",
    gender: "Male",
    email: "john.doe@example.com",
    phoneNo: "1234567890",
    imageUrl: "https://dummyimage.com/150x150/000/fff&text=John",
    dob: "2000-01-01",
    faculty: "Engineering",
    semester: "5th",
    password: "password123",
  },
  {
    id: 2,
    name: "Jane Smith",
    fatherName: "Robert Smith",
    motherName: "Laura Smith",
    gender: "Female",
    email: "jane.smith@example.com",
    phoneNo: "1234567891",
    imageUrl: "https://dummyimage.com/150x150/000/fff&text=Jane",
    dob: "2001-02-02",
    faculty: "Arts",
    semester: "3rd",
    password: "password123",
  },
  {
    id: 3,
    name: "Chris Johnson",
    fatherName: "Peter Johnson",
    motherName: "Mary Johnson",
    gender: "Male",
    email: "chris.johnson@example.com",
    phoneNo: "1234567892",
    imageUrl: "https://dummyimage.com/150x150/000/fff&text=Chris",
    dob: "1999-03-03",
    faculty: "Science",
    semester: "7th",
    password: "password123",
  },
  {
    id: 4,
    name: "Emily Davis",
    fatherName: "Steven Davis",
    motherName: "Anna Davis",
    gender: "Female",
    email: "emily.davis@example.com",
    phoneNo: "1234567893",
    imageUrl: "https://dummyimage.com/150x150/000/fff&text=Emily",
    dob: "2002-04-04",
    faculty: "Law",
    semester: "1st",
    password: "password123",
  },
  {
    id: 5,
    name: "David Wilson",
    fatherName: "Richard Wilson",
    motherName: "Alice Wilson",
    gender: "Male",
    email: "david.wilson@example.com",
    phoneNo: "1234567894",
    imageUrl: "https://dummyimage.com/150x150/000/fff&text=David",
    dob: "1998-05-05",
    faculty: "Medicine",
    semester: "9th",
    password: "password123",
  },
  // Add 15 more similar objects
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 6,
    name: `Student ${i + 6}`,
    fatherName: `Father ${i + 6}`,
    motherName: `Mother ${i + 6}`,
    gender: i % 2 === 0 ? "Male" : "Female",
    email: `student${i + 6}@example.com`,
    phoneNo: `12345678${i + 6}`,
    imageUrl: `https://dummyimage.com/150x150/000/fff&text=Student${i + 6}`,
    dob: `200${i % 10}-0${(i % 12) + 1}-0${(i % 28) + 1}`,
    faculty: i % 3 === 0 ? "Business" : i % 3 === 1 ? "Arts" : "Science",
    semester: `${(i % 8) + 1}th`,
    password: "password123",
  })),
];
