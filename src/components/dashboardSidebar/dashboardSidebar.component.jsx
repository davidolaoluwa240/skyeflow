// Modules
import React from "react";

// Components
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../";

// Images
import skyeflowLogo from "../../assets/images/skyeflow-logo.svg";

// Style
import "./dashboardSidebar.styles.scss";

const DashboardSidebar = ({ className }) => {
  return (
    <aside className={`dashboard__sidebar ${className}`}>
      <div className="dashboard__sidebar-container">
        <div className="dashboard__sidebar-brand">
          <Link to="/" className="dashboard__sidebar-brand-link">
            <img
              className="dashboard__sidebar-brand-icon"
              src={skyeflowLogo}
              alt="skyeflow logo"
            />
          </Link>
        </div>
        <nav className="dashboard__sidebar-navbar">
          <ul className="dashboard__sidebar-list">
            <li className="dashboard__sidebar-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "dashboard__sidebar-link dashboard__sidebar-link--active"
                    : "dashboard__sidebar-link"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="dashboard__sidebar-item">
              <NavLink
                to="/plugins"
                className={({ isActive }) =>
                  isActive
                    ? "dashboard__sidebar-link dashboard__sidebar-link--active"
                    : "dashboard__sidebar-link"
                }
              >
                Custom Plugin
              </NavLink>
            </li>
            <li className="dashboard__sidebar-item">
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  isActive
                    ? "dashboard__sidebar-link dashboard__sidebar-link--active"
                    : "dashboard__sidebar-link"
                }
              >
                Manage Team
              </NavLink>
            </li>
            <li className="dashboard__sidebar-item">
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive
                    ? "dashboard__sidebar-link dashboard__sidebar-link--active"
                    : "dashboard__sidebar-link"
                }
              >
                Tutorial Resources
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="dashboard__sidebar-reference">
          <p className="dashboard__sidebar-reference-text">
            For Marketing Service
          </p>
          <Button className="dashboard__sidebar-reference-btn">
            <MdKeyboardArrowLeft className="dashboard__sidebar-reference-icon" />
            Visit SkyeStudio
          </Button>
        </div>
        <div className="dashboard__sidebar-footer">
          <div className="dashboard__sidebar-profile-wrapper">
            <p className="dashboard__sidebar-initials">MC</p>
            <div className="dashboard__sidebar-profile-summary">
              <p className="dashboard__sidebar-profile-name">
                Mary’s Cake
                <MdKeyboardArrowRight className="dashboard__sidebar-profile-icon" />
              </p>
              <p className="dashboard__sidebar-profile-email">
                contactmarycakes@gmail.
              </p>
            </div>
          </div>
          <div className="dashboard__sidebar-plan-wrapper">
            <div className="dashboard__sidebar-plan">
              <AiFillStar className="dashboard__sidebar-plan-star-icon" />
              <p className="dashboard__sidebar-plan-text">Free</p>
              <Button className="dashboard__sidebar-plan-btn">Upgrade</Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
