import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar_1: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col justify-between">
      <div className="flex flex-col items-center">
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
          <NavLink
            to="/dashboard" // Update this path to match your routing
            className={({ isActive }) =>
              `flex items-center space-x-2 p-3 rounded-lg ${
                isActive ? "bg-purple-100" : "bg-purple-50"
              }`
            }
          >
            <IoSpeedometerOutline className="text-purple-600 text-xl" />
            <span className="text-purple-600 text-lg font-semibold">
              Dashboard
            </span>
          </NavLink>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #d1d5db" }} className="p-3">
        <NavLink
          to="/settings" // Update this path to match your routing
          className={({ isActive }) =>
            `flex items-center space-x-2 text-gray-500 hover:text-gray-700 ${
              isActive ? "text-gray-700 font-semibold" : ""
            }`
          }
        >
          <FiSettings className="text-2xl" />
          <span className="text-lg">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar_1;
