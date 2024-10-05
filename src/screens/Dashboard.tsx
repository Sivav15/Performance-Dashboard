import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/siderBar/SideBar";
import LineChart from "../components/performance_chart/index";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-16">
          <SideBar />
        </div>
        <div className="w-full ">
          <Navbar />
          <div className="w-full bg-gray-100 rounded-lg">
            <LineChart />
            <LineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
