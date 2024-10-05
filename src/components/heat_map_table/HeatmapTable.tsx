import React from "react";

type HourData = {
  time: string;
  imp: number;
  clicks: number;
  cpm: string;
};

type DayData = {
  day: string;
  hours: HourData[];
};

// Sample heat map data (simplified for clarity)
const heatMapData: DayData[] = [
  {
    day: "Sunday",
    hours: [
      { time: "12am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "1am", imp: 5257095, clicks: 31482, cpm: "₹83.31" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
  {
    day: "Monday",
    hours: [
      { time: "12am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "1am", imp: 4372095, clicks: 11406, cpm: "₹13.38" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
  {
    day: "Tuesday",
    hours: [
      { time: "12am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "1am", imp: 5257095, clicks: 31482, cpm: "₹83.31" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
  {
    day: "Wednesday",
    hours: [
      { time: "12am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "1am", imp: 5257095, clicks: 31482, cpm: "₹83.31" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
  {
    day: "Thursday",
    hours: [
      { time: "12am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "1am", imp: 5257095, clicks: 31482, cpm: "₹83.31" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
  {
    day: "Friday",
    hours: [
      { time: "12am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "1am", imp: 5257095, clicks: 31482, cpm: "₹83.31" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
  {
    day: "Saturday",
    hours: [
      { time: "12am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "1am", imp: 5257095, clicks: 31482, cpm: "₹83.31" },
      { time: "2am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "3am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "4am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "5am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "7am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "8am", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9am", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "10am", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "11am", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "12pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "1pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "2pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "3pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "4pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "5pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "6pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "7pm", imp: 6328926, clicks: 11406, cpm: "₹13.38" },
      { time: "8pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
      { time: "9pm", imp: 4372095, clicks: 27494, cpm: "₹64.42" },
      { time: "10pm", imp: 5225709, clicks: 31482, cpm: "₹83.31" },
      { time: "11pm", imp: 6083706, clicks: 54561, cpm: "₹89.66" },
    ],
  },
];

// Color generation based on CPM value (₹) for the heatmap cells
const getColor = (cpm: string) => {
  const value = parseFloat(cpm.replace("₹", ""));
  if (value >= 80) return "bg-blue-500 text-white";
  if (value >= 60) return "bg-purple-400 text-white";
  if (value >= 40) return "bg-pink-300 text-black";
  return "bg-teal-200 text-black";
};

const HeatmapTable: React.FC = () => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        {/* Table Head */}
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center">Time</th>
            {heatMapData.map((day, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
                colSpan={3}
              >
                {day.day}
              </th>
            ))}
          </tr>
          <tr>
            <th className="border border-gray-300 p-2 text-center"></th>
            {heatMapData.map((_, index) => (
              <>
                <th
                  key={`cpm-${index}`}
                  className="border border-gray-300 p-2 text-center"
                >
                  CPM
                </th>
                <th
                  key={`clicks-${index}`}
                  className="border border-gray-300 p-2 text-center"
                >
                  Clicks
                </th>
                <th
                  key={`imp-${index}`}
                  className="border border-gray-300 p-2 text-center"
                >
                  Imp
                </th>
              </>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {heatMapData[0].hours.map((_, hourIndex) => (
            <tr key={hourIndex}>
              <td className="border border-gray-300 p-2 text-center">
                {heatMapData[0].hours[hourIndex].time}
              </td>
              {heatMapData.map((day, dayIndex) => (
                <>
                  <td
                    key={`cpm-${dayIndex}-${hourIndex}`}
                    className={`border border-gray-300 p-2 text-center ${getColor(
                      day.hours[hourIndex].cpm
                    )}`}
                  >
                    {day.hours[hourIndex].cpm}
                  </td>
                  <td
                    key={`clicks-${dayIndex}-${hourIndex}`}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {day.hours[hourIndex].clicks.toLocaleString()}
                  </td>
                  <td
                    key={`imp-${dayIndex}-${hourIndex}`}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {day.hours[hourIndex].imp.toLocaleString()}
                  </td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapTable;
