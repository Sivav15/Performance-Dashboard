import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/siderBar/SideBar";

const DashboardLayout: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-16 bg-black">
          <SideBar />
        </div>
        <div className="w-full bg-gray-100">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
