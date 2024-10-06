import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "0Hr", metric1: 8000, metric2: 12000, metric3: 6000, metric4: 9000 },
  { time: "2Hr", metric1: 7000, metric2: 15000, metric3: 8000, metric4: 11000 },
  {
    time: "4Hr",
    metric1: 11000,
    metric2: 17000,
    metric3: 10000,
    metric4: 12000,
  },
  {
    time: "6Hr",
    metric1: 10000,
    metric2: 14000,
    metric3: 9000,
    metric4: 11500,
  },
  {
    time: "8Hr",
    metric1: 13000,
    metric2: 16000,
    metric3: 12000,
    metric4: 10000,
  },
  {
    time: "10Hr",
    metric1: 15000,
    metric2: 11000,
    metric3: 11000,
    metric4: 13000,
  },
  {
    time: "12Hr",
    metric1: 14000,
    metric2: 10000,
    metric3: 9000,
    metric4: 9000,
  },
];

const LineChartComponent: React.FC = () => {
  return (
    <div className="w-full h-96 px-3 py-2">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            vertical={false}
            horizontal={true}
            strokeDasharray="3 3"
          />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="metric1"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="metric2"
            stroke="#82ca9d"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="metric3"
            stroke="#ff7300"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="metric4"
            stroke="#ff4081"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
