import React from "react";
import HeatmapTable from "./HeatmapTable";

const Index: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Heatmap Data</h1>
      <HeatmapTable />
    </div>
  );
};

export default Index;
