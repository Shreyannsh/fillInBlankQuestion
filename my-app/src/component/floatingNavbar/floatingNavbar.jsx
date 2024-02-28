import "./floatingNavbar.css";

import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

export default function FloatingNavbar() {
  const floatingNavbar = useSelector((state) => state.floatingNavbar);

  const activeLink = ({ isActive }) => ({
    background: isActive ? "rgba(253, 239, 219, 1)" : "",
    boxShadow: isActive ? "0px 2px 0px 0px rgba(246, 177, 77, 1)" : "",
  });

  console.log(floatingNavbar);
  return (
    <div
      className="floatingNavbar"
      style={{ display: floatingNavbar ? "block" : "none" }}
    >
      <div className=" floating-header-section">
        <NavLink className="floating-header-sub-section link">
          <img src="/assets/dashboard-icon.png" alt="" />
          <p className="header-sub-section-heading">Dashboard</p>
        </NavLink>

        <NavLink
          to="/courses"
          style={activeLink}
          className="floating-header-sub-section link"
        >
          <img src="/assets/course-icon.png" alt="" />
          <p className="header-sub-section-heading">Courses</p>
        </NavLink>

        <NavLink className="floating-header-sub-section link">
          <img src="/assets/learning-lab-icon.png" alt="" />
          <p className="header-sub-section-heading">Learning Lab</p>
        </NavLink>

        <NavLink className="floating-header-sub-section link">
          <img src="/assets/achievment-icon.png" alt="" />
          <p className="header-sub-section-heading">Achievements</p>
        </NavLink>
      </div>
    </div>
  );
}
