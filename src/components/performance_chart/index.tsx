import React from "react";
import PerformanceChartHeader from "./PerformanceChartHeader";
import LineChartComponent from "./LineChart";

const Index: React.FC = () => {
  return (
    <div className="m-2 bg-white ">
      <PerformanceChartHeader />
      <LineChartComponent />
    </div>
  );
};

export default Index;
