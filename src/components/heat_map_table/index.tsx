import React from "react";
import HeatmapTable from "./HeatmapTable";

const Index: React.FC = () => {
  return (
    <div className=" p-3 bg-white  rounded-lg w-full">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Heat Map</h2>
        <p className="text-sm text-gray-500">
          Select hours to schedule Day parting
        </p>
      </div>

      <HeatmapTable />
    </div>
  );
};

export default Index;
