const getColorByType = (value: number, type: "Imp" | "Clicks" | "CPM") => {
  if (type === "CPM") {
    if (value >= 80) return "bg-[#AFEFFF] text-[#197DB5]";
    if (value >= 60) return "bg-[#E0D8F9] text-[#6A39DB]";
    if (value >= 40) return "bg-[#FFD7EB] text-[#E156E1]";
    return "bg-[#CFFAF5] text-[#A75DA1]";
  }

  if (type === "Imp") {
    if (value >= 6000000) return "bg-[#E0D8F9] text-[#6A39DB]";
    if (value >= 5000000) return "bg-[#D8CEF8] text-[#6A39DB]";
    return "bg-[#D0C3F8] text-[#6A39DB]";
  }

  if (type === "Clicks") {
    if (value >= 50000) return "bg-[#AFEFFF] text-[#197DB5]";
    if (value >= 30000) return "bg-[#FFD7EB] text-[#E156E1]";
    if (value >= 10000) return "bg-[#FFE2F2] text-[#E156E1]";
    return "bg-[#CFFAF5] text-black";
  }

  return "bg-white text-black";
};

export default getColorByType;
