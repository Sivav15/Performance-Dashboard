import React from "react";
import PerformanceChart from "../components/performance_chart/index";
import Heatmap from "../components/heat_map_table/index";
const Dashboard: React.FC = () => {
  return (
    <div className="px-2 py-4">
      <div className="mb-4">
        <PerformanceChart />
      </div>
      <div className="">
        <Heatmap />
      </div>
    </div>
  );
};

export default Dashboard;
