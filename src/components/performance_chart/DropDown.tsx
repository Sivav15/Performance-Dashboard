import React, { useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Metrics {
  Spend: boolean;
  Revenue: boolean;
  Impressions: boolean;
  Clicks: boolean;
  CPM: boolean;
  CTR: boolean;
}

const Dropdown: React.FC = () => {
  const ref = useRef<null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useOnClickOutside(ref, () => setIsOpen(false));
  const [selectedMetrics, setSelectedMetrics] = useState<Metrics>({
    Spend: false,
    Revenue: false,
    Impressions: false,
    Clicks: false,
    CPM: false,
    CTR: false,
  });

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleMetricChange = (metric: keyof Metrics): void => {
    setSelectedMetrics((prev) => ({
      ...prev,
      [metric]: !prev[metric],
    }));
  };

  const handleApply = (): void => {
    console.log("Selected Metrics:", selectedMetrics);
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Select Metrics <FaCaretDown className="ml-2" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg z-10"
          ref={ref}
        >
          <ul className="">
            {Object.keys(selectedMetrics).map((metric) => (
              <li key={metric} className="flex items-center px-4 py-2">
                <input
                  type="checkbox"
                  checked={selectedMetrics[metric as keyof Metrics]}
                  onChange={() => handleMetricChange(metric as keyof Metrics)}
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-sm font-semibold text-gray-700">
                  {metric}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between pb-2 px-2 bg-gray-50">
            <button
              onClick={handleCancel}
              className="text-gray-500 bg-gray-200 px-4 py-1 rounded-md font-semibold hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="bg-blue-600 font-semibold text-white rounded-md  px-4 py-1 rounded text-sm"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
