import React from "react";
import PerformanceChartHeader from "./PerformanceChartHeader";
import LineChartComponent from "./LineChart";

const Index: React.FC = () => {
  return (
    <div className=" bg-white  rounded-lg ">
      <PerformanceChartHeader />
      <LineChartComponent />
    </div>
  );
};

export default Index;
