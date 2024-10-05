import React from "react";
import companyLogo from "../../assets/companyLogo.png";
import dashboard_icon from "../../assets/dashboardIcon.png";
import Sidebar_1 from "./SiderBar_1";

const SideBar: React.FC = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
      }}
      className="w-16 z-30"
    >
      <div
        className="bg-white shadow group relative z-30"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="
         w-full bg-white absolute left-[-270px] transition-all transform ease-in-out duration-700
          group-hover:left-0
        "
        >
          <Sidebar_1 />
        </div>
        <div className="py-4 flex justify-center w-full">
          <img src={companyLogo} alt="company logo" width={25} />
        </div>

        <div
          className="pt-7 flex justify-center w-full"
          style={{ borderTop: "1.8px solid #d1d5db" }}
        >
          <img src={dashboard_icon} alt="dashboard icon" width={32} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
