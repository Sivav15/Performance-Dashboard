import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/siderBar/SideBar";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-16">
          <SideBar />
        </div>
        <div className="w-full">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
