

function AddNotice() {
  return (
    <div className="flex    w-full pt-10 -center min-h-screen  ">
      <div className="w-full p-6     rounded-lg   ">
        <h1 className="text-2xl font-bold mb-6 text-custom-36 ">Add Notice</h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Give notice title name here"
              className="w-[758px] h-[62px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Add media
            </button>
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Add your notice here"
              className="w-[753px] h-[240px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <button
              type="button"
              className="w-[150px] h-[40px] bg-gray-200 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-300"
            >
              Select Category
            </button>
            <button
              type="button"
              className="w-[40px] h-[40px] flex items-center justify-center bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300"
            >
              👁
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Publish
            </button>
          </div>
        </form>
        <button
          type="button"
          className="text-blue-500 hover:underline text-sm"
        >
          Back to front page
        </button>
      </div>
    </div>
  );
}

export default AddNotice;
