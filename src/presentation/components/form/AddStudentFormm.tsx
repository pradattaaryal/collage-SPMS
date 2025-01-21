"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Dropdown from "../../ui/Dropdown"; // Adjust the path as needed

interface StudentFormData {
  semester: string;
  class: string;
  phone: string;
}

export default function DFG() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<StudentFormData>();

  const onSubmit: SubmitHandler<StudentFormData> = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-[60%] h-[60%]  mx-auto p-6 border bg-red-600 border-gray-300 rounded-md shadow-md"
    >
      <h1 className="text-2xl font-semibold mb-6">Add Student</h1>
 

      {/* Semester */}
      <div className="mb-4">
        <Dropdown
          name="semeester"
          title="Semester"
          defaultOption="Select Semester"
          options={["Semester 1", "Semester 2", "Semester 3", "Semester 4"]}
          handleChange={(value) => setValue("semester", value)}
        />
        {errors.semester && <p className="text-red-600 text-sm">Semester is required</p>}
      </div>

      {/* Class */}
      <div className="mb-4">
        <Dropdown
          name="class"
          title="Class"
          defaultOption="Select Class"
          options={["Class A", "Class B", "Class C"]}
          handleChange={(value) => setValue("class", value)}
        />
        {errors.class && <p className="text-red-600 text-sm">Class is required</p>}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone", { required: "Phone number is required" })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
      >
        Add Student
      </button>
    </form>
  );
}
