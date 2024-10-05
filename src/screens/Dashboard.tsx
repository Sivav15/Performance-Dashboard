import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/siderBar/SideBar";
import PerformanceChart from "../components/performance_chart/index";
import Heatmap from "../components/heat_map_table/index";
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
            <PerformanceChart />
            <Heatmap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
