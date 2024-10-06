import React, { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { metrics_api } from "../../services/api";
import { metricsReducer } from "../../features/dashboardSlice";

interface Metric {
  label: string;
  code: string;
}

const Dropdown: React.FC = () => {
  const ref = useRef<null>(null);
  const { token, X_USER_IDENTITY } = useSelector(
    (state: RootState) => state.authReducer.auth
  );
  const selectedMetrics = useSelector(
    (state: RootState) => state.dashboardReducer.metrics
  );

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useOnClickOutside(ref, () => setIsOpen(false));
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [localSelectedMetrics, setLocalSelectedMetrics] =
    useState<string[]>(selectedMetrics);

  const postDayPartingFilterList = async () => {
    try {
      const response = await axios.post(
        metrics_api,
        {
          type: "customizeMetrics",
        },
        {
          headers: {
            "X-USER-IDENTITY": X_USER_IDENTITY,
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const fetchedMetrics = response.data.result;
      setMetrics(fetchedMetrics);
    } catch (error: any) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    if (token && metrics.length === 0) {
      postDayPartingFilterList();
    }
  }, [token]);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleMetricChange = (code: string): void => {
    setLocalSelectedMetrics((prev) =>
      prev.includes(code)
        ? prev.filter((metric) => metric !== code)
        : [...prev, code]
    );
  };

  const handleApply = (): void => {
    dispatch(metricsReducer(localSelectedMetrics));
    console.log("Selected Metrics:", localSelectedMetrics);
    setIsOpen(false);
  };

  const handleCancel = (): void => {
    setLocalSelectedMetrics(selectedMetrics);
    setIsOpen(false);
  };

  return (
    <div className="relative text-left" ref={ref}>
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        Select Metrics <FaCaretDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded shadow-lg z-10">
          <ul>
            {metrics.map((metric) => (
              <li key={metric.code} className="flex items-center px-4 py-2">
                <input
                  type="checkbox"
                  checked={localSelectedMetrics.includes(metric.code)}
                  onChange={() => handleMetricChange(metric.code)}
                  className="form-checkbox text-blue-600 h-4 w-4"
                />
                <span className="ml-2 text-sm font-semibold text-gray-700">
                  {metric.label.replace("%", "percent")}
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
              className="bg-blue-600 font-semibold text-white rounded-md px-4 py-1 text-sm"
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
