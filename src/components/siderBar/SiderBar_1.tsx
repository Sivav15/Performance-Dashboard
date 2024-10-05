import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";

const Sidebar_1: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="py-3">
          <img
            src="https://techsavvy.ai/assets/images/common/logo/logo.svg"
            alt="Techsavvy Logo"
            className="w-34"
          />
        </div>

        <div
          className="w-full px-4 py-3 pt-4"
          style={{ borderTop: "1.8px solid #d1d5db" }}
        >
          <div className="flex items-center space-x-2 bg-purple-50 p-3 rounded-lg">
            <IoSpeedometerOutline className="text-purple-600 text-xl" />
            <span className="text-purple-600 text-lg font-semibold">
              Dashboard
            </span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #d1d5db" }} className=" p-3">
        <div className="w-full pl-3">
          <div className="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
            <FiSettings className="text-2xl" />
            <span className="text-lg">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar_1;
