import React from "react";
import Dropdown from "./DropDown";

const PerformanceChartHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-300">
      <div>
        <h2 className="text-lg font-semibold">Performance Chart</h2>
        <p className="text-sm text-gray-500">
          Key Metrics for Dayparting Schedule Performance Evaluation
        </p>
      </div>

      <Dropdown />
    </div>
  );
};

export default PerformanceChartHeader;
