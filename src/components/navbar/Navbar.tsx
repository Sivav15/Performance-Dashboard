// src/components/Navbar.tsx
import React, { useState } from "react";
import {
  AiOutlineExpand,
  AiOutlineUser,
  AiOutlineCalendar,
} from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import UserCard from "./UserCard";

const Navbar: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <>
      <nav className="flex items-center justify-between py-2 px-3 bg-white shadow">
        <div className="text-xl font-semibold">Dashboard</div>

        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-3 py-0">
            {/* Date Icon */}
            <AiOutlineCalendar className="text-lg text-gray-600" />

            <div className="">
              <div className="text-xs font-semibold text-gray-600">
                Last 7 Days: Jan 14 - Jan 20, 2024
              </div>
              <div className="text-xs text-gray-400">
                Compared: Jan 07 - Jan 13, 2024
              </div>
            </div>
            <RiArrowDropDownLine className="text-lg text-gray-600" />
          </div>

          <div className="flex items-center space-x-4 gap-1">
            <AiOutlineExpand className="text-lg text-gray-600 cursor-pointer" />

            <IoMoonOutline className="text-lg text-gray-600 cursor-pointer" />

            <div
              className="flex"
              onClick={() => setIsCardVisible(!isCardVisible)}
            >
              <AiOutlineUser className="text-lg text-gray-600 cursor-pointer" />
              <RiArrowDropDownLine className="text-lg text-gray-600" />
            </div>
          </div>
        </div>
      </nav>
      <UserCard
        name="Naveen"
        status="Online"
        onLogout={handleLogout}
        isCardVisible={isCardVisible}
        setIsCardVisible={setIsCardVisible}
      />
    </>
  );
};

export default Navbar;
