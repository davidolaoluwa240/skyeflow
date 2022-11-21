// Modules
import React from "react";

// Components
import { DashboardSidebar } from "../../components";

// Style
import "./dashboardLayout.styles.scss";

const DashboardLayout = ({ className }) => {
  return (
    <div className={`dashboard ${className}`}>
      <div className="dashboard__container container">
        <div className="dashboard__left">
          <DashboardSidebar />
        </div>
        <div className="dashboard__right"></div>
      </div>
    </div>
  );
};

DashboardLayout.defaultProps = {
  className: "",
};

export default DashboardLayout;
