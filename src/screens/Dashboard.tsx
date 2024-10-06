import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/siderBar/SideBar";
import PerformanceChart from "../components/performance_chart/index";
import Heatmap from "../components/heat_map_table/index";
const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-16 bg-black">
          <SideBar />
        </div>
        <div className="w-full bg-gray-100">
          <Navbar />
          <div className="px-2 py-4">
            <div className="mb-4">
              <PerformanceChart />
            </div>
            <div className="">
              <Heatmap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
