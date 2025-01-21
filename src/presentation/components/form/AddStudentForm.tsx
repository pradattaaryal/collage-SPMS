"use client";
import { useForm } from "react-hook-form";
import { useState, useRef, useContext } from "react";
import { StudentRepositoryContext } from "../../../core/application/context/StudentRepositoryContext";
import { Student } from "../../../core/domain/entity/Student.entity";
import { SEMESTERS, GENDERS, FACULTY } from "../../../constants/constants";
import vector from '../../assets/image/Vector.png'
export default function AddStudentForm() {
  const { register, handleSubmit, reset } = useForm<Student>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const StudentRepository = useContext(StudentRepositoryContext);

  const onSubmit = async (data: Student) => {
    try {
      if (!StudentRepository) throw new Error("Repository not available");

      const formData = new FormData();

      // Add all fields explicitly
      Object.keys(data).forEach((key) => {
        const value = data[key as keyof Student];
        if (value !== undefined) {
          formData.append(key, value as string);
        }
      });

      // Append image file if selected
      if (fileInputRef.current?.files?.[0]) {
        formData.append("Images", fileInputRef.current.files[0]);
      }
      await console.log(formData)
      const response = await StudentRepository.registerStudent(formData);

      if (!response.succeeded) {
        throw new Error(
          response.errors?.join(", ") || "Failed to register student"
        );
      }

      alert("Student registered successfully!");
      reset();
      setSelectedImage(null);
    } catch (error: any) {
      console.error("Error registering student:", error.message);
      alert(error.message || "An unexpected error occurred.");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-[822px] md:max-h-[572px]  h-full rounded-xl border md:m-5 m-2  p-2 md:p-6 shadow-md">
      <div className="flex   items-center justify-between  ">
        <h1 className="text-2xl font-semibold text-gray-700">Add Students</h1>
        <div
          className="flex items-center justify-center cursor-pointer   border-2 border-black rounded-xl 
             w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[115px] lg:h-[115px]"
          onClick={handleFileInputClick}
        >
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected Student Image"
              className="w-full h-full rounded-xl object-cover"
            />
          ) : (
            <img
            src={vector}
            alt="Selected Student Image"
            className="w-full h-full rounded-xl object-cover"
          />
          )}
        </div>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  ">
        {/* Name and Age */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>
          <div className="  col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>
        </div>

        {/* Email and Password */}
        <div className="grid gap-4   sm:grid-cols-3">
          {/* Email Field with Custom Width */}
          <div className="col-span-1">
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              id="dob"
              type="string"
              {...register("dob", { required: "Date of birth is required" })}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>

          {/* Password Field */}
          <div className="col-span-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className="mt-1 block w-full  rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>

          {/* Gender Field */}
          <div className="col-span-1">
            <label
              htmlFor="Gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="Gender"
              {...register("gender")}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            >
              <option value="">Select Gender</option>
              {GENDERS.map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Parent Names */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fatherName"
              className="block text-sm font-medium text-gray-700"
            >
              Father Name
            </label>
            <input
              id="fatherName"
              {...register("fatherName")}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="motherName"
              className="block text-sm font-medium text-gray-700"
            >
              Mother Name
            </label>
            <input
              id="motherName"
              {...register("motherName")}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>
        </div>

        {/* Semester, Class, Phone */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="col-span-1">
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700"
            >
              Semester
            </label>
            <select
              id="semester"
              {...register("semester")}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            >
              <option value="">Select semester</option>
              {SEMESTERS.map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="faculty"
              className="block text-sm font-medium text-gray-700"
            >
              faculty
            </label>
            <select
              id="faculty"
              {...register("faculty")}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            >
              <option value="">Select faculty</option>
              {FACULTY.map((faculty) => (
                <option key={faculty} value={faculty}>
                  {faculty}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="phoneNo"
              type="tel"
              {...register("phoneNo")}
              className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 max-w-[131px] w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
