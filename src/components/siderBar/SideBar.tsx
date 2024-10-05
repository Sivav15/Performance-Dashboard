import React from "react";
import companyLogo from "../../assets/companyLogo.png";
import dashboard_icon from "../../assets/dashboardIcon.png";
import Sidebar_1 from "./SiderBar_1";

const SideBar: React.FC = () => {
  return (
    <div className="bg-white shadow group relative" style={{ height: "100vh" }}>
      <div
        className="
          absolute left-[-270px] transition-all transform ease-in-out duration-700
          group-hover:left-0
        "
      >
        <Sidebar_1 />
      </div>
      <div className="py-4 flex justify-center">
        <img src={companyLogo} alt="company logo" width={25} />
      </div>

      <div
        className="pt-7 flex justify-center"
        style={{ borderTop: "1.8px solid #d1d5db" }}
      >
        <img src={dashboard_icon} alt="dashboard icon" width={32} />
      </div>
    </div>
  );
};

export default SideBar;
