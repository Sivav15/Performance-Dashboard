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
const getColorByType = (value: string, type: "Imp" | "Clicks" | "CPM") => {
  const numericValue = parseFloat(value.replace(/[₹,]/g, ""));

  if (type === "CPM") {
    if (numericValue >= 80) return "bg-[#AFEFFF] text-[#197DB5]";
    if (numericValue >= 60) return "bg-[#E0D8F9] text-[#6A39DB]";
    if (numericValue >= 40) return "bg-[#FFD7EB] text-[#E156E1]";
    return "bg-[#CFFAF5] text-[#A75DA1]";
  }

  if (type === "Imp") {
    if (numericValue >= 6000000) return "bg-[#E0D8F9] text-[#6A39DB]";
    if (numericValue >= 5000000) return "bg-[#D8CEF8] text-[#6A39DB]";
    return "bg-[#D0C3F8] text-[#6A39DB]";
  }

  if (type === "Clicks") {
    if (numericValue >= 50000) return "bg-[#AFEFFF] text-[#197DB5]";
    if (numericValue >= 30000) return "bg-[#FFD7EB] text-[#E156E1]";
    if (numericValue >= 10000) return "bg-[#FFE2F2] text-[#E156E1]";
    return "bg-[#CFFAF5] text-black";
  }

  return "bg-white text-black";
};

const HeatmapTable: React.FC = () => {
  return (
    <div
      className="w-full overflow-x-auto overflow-y-auto pt-3"
      style={{ maxWidth: "92vw" }}
    >
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-center "></th>
            {heatMapData.map((day, index) => (
              <th
                key={index}
                className="text-sm text-gray-500 p-2 text-center min-w-[180px]"
                colSpan={3}
              >
                {day.day}
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
          {heatMapData[0].hours.map((_, hourIndex) => (
            <tr key={hourIndex}>
              <td className="p-2 text-sm text-gray-500 text-center">
                {heatMapData[0].hours[hourIndex].time}
              </td>
              {heatMapData.map((day, dayIndex) => (
                <React.Fragment key={dayIndex}>
                  <td
                    key={`imp-${dayIndex}-${hourIndex}`}
                    className={`p-0 text-sm text-center`}
                  >
                    <div
                      className={`m-0.5 ${getColorByType(
                        day.hours[hourIndex].imp.toLocaleString(),
                        "Imp"
                      )} px-2 py-1 rounded`}
                    >
                      {day.hours[hourIndex].imp.toLocaleString()}
                    </div>
                  </td>
                  <td
                    key={`clicks-${dayIndex}-${hourIndex}`}
                    className={`p-0 text-sm text-center`}
                  >
                    <div
                      className={`m-0.5 ${getColorByType(
                        day.hours[hourIndex].clicks.toLocaleString(),
                        "Clicks"
                      )} px-2 py-1 rounded`}
                    >
                      {day.hours[hourIndex].clicks.toLocaleString()}
                    </div>
                  </td>

                  <td
                    key={`cpm-${dayIndex}-${hourIndex}`}
                    className={`p-0 text-sm text-center`}
                  >
                    <div
                      className={`m-0.5 ${getColorByType(
                        day.hours[hourIndex].cpm,
                        "CPM"
                      )} px-2 py-1 rounded`}
                    >
                      {day.hours[hourIndex].cpm}
                    </div>
                  </td>
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HeatmapTable;
