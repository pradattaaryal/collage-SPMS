import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 h-[60px] flex justify-between items-center px-6 shadow-md">
      {/* Empty space for left alignment */}
      <div className="flex-grow text-custom-28 md:hidden "><GiHamburgerMenu />
      </div>
      <div className="md:visible flex-grow"></div>
      {/* Notification and Profile Section */}
      <div className="flex    items-center space-x-4">
        {/* Notification Icon */}
        <button className="p-2 bg-transparent text-blue-600 hover:text-blue-800">
          🔔
        </button>

        {/* Profile Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-sm text-black">
            <p className="font-semibold">Unknown</p>
            <p className="text-gray-600">unknown12@gmail.com</p>
          </div>
        </div>

        {/* Settings Icon */}
        <button className="p-2 bg-transparent text-blue-600 hover:text-blue-800">
          ⚙️
        </button>
      </div>
    </header>
  );
};

export default Header;
