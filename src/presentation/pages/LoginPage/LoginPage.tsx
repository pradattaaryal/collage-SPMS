import React from "react";
 import ll from '../../assets/image/LoginPage/ll.png';
 import LoginFrom from "../../components/form/LoginForm";
const LoginPage: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${ll})` }}
    >
      {/* Inner Content (scaled down further) */}
      <div className="transform scale-75 md:scale-85 flex flex-col items-center w-full">
        {/* Slogan Section */}
        <div className="w-full flex justify-center mb-5 px-4">
          <div className="mx-auto text-[#F7C042] text-3xl md:text-[64px] font-bold text-center">
            "कडा अनुशासन, स्तरीय शिक्षा"
          </div>
        </div>

       <LoginFrom/>
      </div>
    </div>
  );
};

export default LoginPage;