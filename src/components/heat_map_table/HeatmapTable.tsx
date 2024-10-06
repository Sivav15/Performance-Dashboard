import React, { useEffect, useState } from "react";
import useLoadingModal from "../../hooks/useLoadingModal";
import axios from "axios";
import getColorByType from "../../utils/getColorByType";
import convertTo12HourFormat from "../../utils/convertTo12HourFormat";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { heatmap_list } from "../../services/api";

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
  const [isLoading, setLoading] = useState(false);
  const [heatMapData, setHeatMapData] = useState<HeatMapDay[]>([]);
  const { token, X_USER_IDENTITY } = useSelector(
    (state: RootState) => state.authReducer.auth
  );
  const postHeatmapList = async () => {
    const headers = {
      "X-USER-IDENTITY": X_USER_IDENTITY,
      Authorization: `Bearer ${token}`,
    };

    const data = {
      startDate: "2024-01-07",
      endDate: "2024-01-13",
      metrics: ["Impressions", "Clicks", "CPM"],
    };

    try {
      setLoading(true);
      const response = await axios.post(heatmap_list, data, { headers });
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
      setLoading(false);
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
      {isLoading ? (
        <div> Loading...</div>
      ) : (
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
      )}
    </div>
  );
};

export default HeatmapTable;
