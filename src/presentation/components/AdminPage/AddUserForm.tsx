import React from "react";

type AddStudentFormProps = {};

const AddStudentForm: React.FC<AddStudentFormProps> = () => {
  return (
    <div className="flex justify-center  items-center min-h-svh bg-white  ">
      <div className="bg-red-500 shadow-lg rounded-lg w-[871px] h-[641px] px-16 py-12 relative">
         

        <form className="space-y-6 bg-blue-700">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Age</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter age"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Email address</label>
              <input
                type="email"
                className="border max-w-[341px] w-full border-gray-300 rounded p-2 focus:outline-blue-500"

                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Father name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter father name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Mother name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter mother name"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Semester</label>
              <select
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
              >
                <option>Select semester</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Class</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter class"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Phone number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded p-2 focus:outline-blue-500"
                placeholder="Enter phone number"
              />
            </div>
          </div>
          
        {/* Profile Picture Section */}
        <div className="absolute top-8 right-8 text-center">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
            <span className="text-gray-500">Add</span>
          </div>
          <button
            type="button"
            className="text-sm text-blue-500 border border-blue-500 rounded px-3 py-1 hover:bg-blue-500 hover:text-white"
          >
            Add
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600"
        >
          Add student
        </button>
        </form>

      </div>
    </div>
  );
};

export default AddStudentForm;
