import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import { PerformanceGraphList_api } from "../../services/api";
import { RootState } from "../../app/store";

interface LineChartData {
  time: string;
  [key: string]: number | string;
}

const LineChartComponent: React.FC = () => {
  const [data, setData] = useState<LineChartData[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const { token, X_USER_IDENTITY } = useSelector(
    (state: RootState) => state.authReducer.auth
  );

  const selectedMetrics = useSelector(
    (state: RootState) => state.dashboardReducer.metrics
  );

  const payload = {
    startDate: "2024-06-08",
    endDate: "2024-07-07",
    metrics: selectedMetrics,
  };

  const headers = {
    "X-USER-IDENTITY": X_USER_IDENTITY,
    Authorization: `Bearer ${token}`,
  };

  const postDayPartingPerformanceGraphList = async () => {
    try {
      setLoading(true);
      const response = await axios.post(PerformanceGraphList_api, payload, {
        headers,
      });

      const data = response.data.result.categories.map(
        (category: string, index: number) => {
          const hour = parseInt(category.split(":")[0], 10);
          const transformedData: LineChartData = {
            time: `${hour}hr`,
          };

          response.data.result.series.forEach(
            (series: { name: string; data: number[] }) => {
              transformedData[series.name] = series.data[index];
            }
          );

          return transformedData;
        }
      );

      setData(data);
    } catch (error: any) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && selectedMetrics) {
      postDayPartingPerformanceGraphList();
    }
  }, [token, selectedMetrics]);

  const colors: { [key: string]: string } = {
    Spend: "#FF6347",
    Revenue: "#4C8BF5",
    Orders: "#A63A61",
    CR_perc: "#7C9A4C",
    ACOS: "#FFD700",
    ROAS: "#FF4500",
    AOV: "#6A5ACD",
    CPC: "#FF1493",
    Impressions: "#00CED1",
    Clicks: "#32CD32",
    CPM: "#FF69B4",
    CTR: "#8A2BE2",
  };

  const generateTicks = (data: LineChartData[]): number[] => {
    const max = Math.max(
      ...data.map((item) =>
        Math.max(...selectedMetrics.map((metric) => item[metric] as number))
      )
    );
    const increment = 500;
    const ticks: number[] = [];

    for (let i = 0; i <= max; i += increment) {
      ticks.push(i);
    }

    return ticks;
  };

  const ticks = data.length > 0 ? generateTicks(data) : [];

  return (
    <div className="w-full h-96 px-3 py-2">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data && data.length > 0 && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid
                  vertical={false}
                  horizontal={true}
                  strokeDasharray="3 3"
                />
                <XAxis dataKey="time" />
                <YAxis domain={[0, "dataMax + 1000"]} ticks={ticks} />
                <Tooltip formatter={(value) => [`₹ ${value}k`]} />
                <Legend />

                {selectedMetrics.map((metric: string) => {
                  return (
                    <Line
                      key={metric}
                      type="monotone"
                      dataKey={metric}
                      stroke={colors[metric] || "#8884d8"}
                      strokeWidth={2}
                      dot={{ r: 4, fill: colors[metric] || "#8884d8" }}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          )}
        </>
      )}
    </div>
  );
};

export default LineChartComponent;
