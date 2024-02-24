import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const activeLink = ({ isActive }) => ({
    background: isActive ? "rgba(253, 239, 219, 1)" : "",
    boxShadow: isActive ? "0px 2px 0px 0px rgba(246, 177, 77, 1)" : "",
  });
  return (
    <div className="header">
      <div className="header-section">
        <img src="/assets/logo.png" alt="" />
        <img src="/assets/logoline.png" alt="" />
      </div>
      <div className="header-section">
        <NavLink className="header-sub-section link">
          <img src="/assets/dashboard-icon.png" alt="" />
          <p className="header-sub-section-heading">Dashboard</p>
        </NavLink>

        <NavLink
          to="/courses"
          style={activeLink}
          className="header-sub-section link"
        >
          <img src="/assets/course-icon.png" alt="" />
          <p className="header-sub-section-heading">Courses</p>
        </NavLink>

        <NavLink className="header-sub-section link">
          <img src="/assets/learning-lab-icon.png" alt="" />
          <p className="header-sub-section-heading">Learning Lab</p>
        </NavLink>

        <NavLink className="header-sub-section link">
          <img src="/assets/achievment-icon.png" alt="" />
          <p className="header-sub-section-heading">Achievements</p>
        </NavLink>
      </div>
      <div className="header-section">
        <img src="/assets/Notifcation and Profile.png" alt="" />
      </div>
    </div>
  );
}
export default Header;
