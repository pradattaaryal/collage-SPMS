import React from 'react';
import logo from '../../assets/image/LoginPage/L.png'
type NavItem = {
  icon: JSX.Element;
  label: string;
};

const navItems: NavItem[] = [
  { icon: <i className="fas fa-th"></i>, label: 'Dashboard' },
  { icon: <i className="fas fa-calendar"></i>, label: 'Meeting' },
  { icon: <i className="fas fa-users"></i>, label: 'Manage User' },
  { icon: <i className="fas fa-bullhorn"></i>, label: 'Notice' },
  { icon: <i className="fas fa-file-alt"></i>, label: 'Result' },
  { icon: <i className="fas fa-cog"></i>, label: 'Settings' },
  { icon: <i className="fas fa-file"></i>, label: 'Portfolio' },
  { icon: <i className="fas fa-book"></i>, label: 'Courses' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-100 w-[302px] h-screen flex flex-col justify-between shadow-lg">
      <div className="   flex  flex-col items-center">
        <div className=" mb-4 mt-4 ">
          <img
            src={logo}
            alt="Logo"
            className="w-[100px] h-[100px]  "
          />
        </div>
        <h1 className="text-center text-blue-700 font-bold">“कडा अनुशासन, स्तरीय शिक्षा”</h1>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4 p-4">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center space-x-3 text-blue-700 hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        <button className="w-full bg-blue-700 text-white py-2 rounded-md">Log out</button>
      </div>
    </div>
  );
};

export default Sidebar;
