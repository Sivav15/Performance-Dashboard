import React, { useEffect, useState } from "react";
import useLoadingModal from "../../hooks/useLoadingModal";
import axios from "axios";
import getColorByType from "../../utils/getColorByType";
import convertTo12HourFormat from "../../utils/convertTo12HourFormat";

interface HourlyData {
  time_part: string;
  show: number;
  Impressions: number;
  Clicks: number;
  CPM: number;
}

interface HeatMapDay {
  weekNumber: number;
  weekday: string;
  Total_Impressions: number;
  Total_Clicks: number;
  Total_CPM: number;
  Hourly_Data: HourlyData[];
  min_Impressions: number;
  max_Impressions: number;
  min_Clicks: number;
  max_Clicks: number;
  min_CPM: number;
  max_CPM: number;
}

const HeatmapTable: React.FC = () => {
  const { showLoading, hideLoading, LoadingModalComponent } = useLoadingModal();
  const [heatMapData, setHeatMapData] = useState<HeatMapDay[]>([]);

  const postHeatmapList = async () => {
    const url = "https://coreapi.hectorai.live/api/day-parting/heatmap-list";
    const headers = {
      "X-USER-IDENTITY":
        "U2FsdGVkX1/s3KYiwn1BdNtI1nNitQYbPVGs5G6NloO7PVGlCBTzYpJzAOD/8GaIp30IcvyKuBArXvm5xNN+gOhrSx51l49Ejxan4p7mt1vAUIE6/O277AUuMZVIMsmOtF5YGyaGkyDk9bMjArr3ekLdCKAZu9xXN/b92jqFqXb2jy4tbQbp8UUQxgywAWk1gR4dSb/vaJt4oEIeh0EWuEc4xU2NVdGSedANzYRqUEatsdtRYbNbdkZMt9koQcKO55/Y6fGafYUCztvkASn6i8WyPIxXMq6vf+xo4IYXeOh2WP8WgH/cQgq6V74Fnl82KYtUvGzWVMXpm2rrhsHewJptgJvJY+NinV05HdRJGtXQ1SN3/IhqyJZJhTb/TcO5SkDa8dIGfwgcciGspOofrA==",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGI0ZTNhN2Y1YmU4ZDY2MjVlN2I0MiIsImZ1bGxOYW1lIjoiU3lzdGVtIFRlc3QiLCJlbWFpbCI6InRlc3RAZGV2LmNvbSIsInNlc3Npb25JZCI6InJhbmRvbVN0cmluZyIsImlhdCI6MTcyODE0MjA1Nn0._lxRmsgh3qNOnjY_tcm4fg24qa9SDodNTqG1LOaYFVw",
      "Content-Type": "application/json",
    };

    const data = {
      startDate: "2024-01-07",
      endDate: "2024-01-13",
      metrics: ["Impressions", "Clicks", "CPM"],
    };

    try {
      showLoading();
      const response = await axios.post(url, data, { headers });
      console.log("Response data:", response.data.result);
      setHeatMapData(response.data.result);
    } catch (error: any) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        console.error(
          "Error during API call:",
          error.response ? error.response.data : error.message
        );
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      hideLoading();
    }
  };

  useEffect(() => {
    postHeatmapList();
  }, []);

  return (
    <div
      className="w-full overflow-x-auto overflow-y-auto pt-3"
      style={{ maxWidth: "92vw" }}
    >
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-center"></th>
            {heatMapData.map((day, index) => (
              <th
                key={index}
                className="text-sm text-gray-500 p-2 text-center"
                colSpan={3}
              >
                {day.weekday}
              </th>
            ))}
          </tr>
          <tr>
            <th className="p-2 text-center"></th>
            {heatMapData.map((_, index) => (
              <React.Fragment key={index}>
                <th className="text-sm font-semibold p-2 text-center">Imp</th>
                <th className="text-sm font-semibold p-2 text-center">
                  Clicks
                </th>
                <th className="text-sm font-semibold p-2 text-center">CPM</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>

        <tbody>
          {heatMapData.length > 0 &&
            heatMapData[0].Hourly_Data.map((_, hourIndex) => (
              <tr key={hourIndex}>
                <td className="p-2 text-sm text-gray-500 text-center">
                  {convertTo12HourFormat(
                    heatMapData[0].Hourly_Data[hourIndex].time_part
                  )}
                </td>
                {heatMapData.map((day, dayIndex) => (
                  <React.Fragment key={dayIndex}>
                    <td
                      key={`imp-${dayIndex}-${hourIndex}`}
                      className={`p-0 text-sm text-center`}
                    >
                      <div
                        className={`m-0.5 ${getColorByType(
                          day.Hourly_Data[hourIndex].Impressions,
                          "Imp"
                        )} px-2 py-1 rounded`}
                      >
                        {day.Hourly_Data[hourIndex].Impressions}
                      </div>
                    </td>
                    <td
                      key={`clicks-${dayIndex}-${hourIndex}`}
                      className={`p-0 text-sm text-center`}
                    >
                      <div
                        className={`m-0.5 ${getColorByType(
                          day.Hourly_Data[hourIndex].Clicks,
                          "Clicks"
                        )} px-2 py-1 rounded`}
                      >
                        {day.Hourly_Data[hourIndex].Clicks}
                      </div>
                    </td>

                    <td
                      key={`cpm-${dayIndex}-${hourIndex}`}
                      className={`p-0 text-sm text-center`}
                    >
                      <div
                        className={`m-0.5 ${getColorByType(
                          day.Hourly_Data[hourIndex].CPM,
                          "CPM"
                        )} px-2 py-1 rounded`}
                      >
                        {day.Hourly_Data[hourIndex].CPM.toFixed(2)}
                      </div>
                    </td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <LoadingModalComponent />
    </div>
  );
};

export default HeatmapTable;
