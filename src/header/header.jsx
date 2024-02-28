import "./header.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

function Header() {
  const activeLink = ({ isActive }) => ({
    background: isActive ? "rgba(253, 239, 219, 1)" : "",
    boxShadow: isActive ? "0px 2px 0px 0px rgba(246, 177, 77, 1)" : "",
  });

  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="header-section">
        <img
          className="humburger-menu"
          src="/assets/humburger-menu.png"
          alt=""
          onClick={() => dispatch({ type: "floatingNavbar" })}
        />

        <img src="/assets/logo.png" alt="" />
        <img className="brand-name" src="/assets/logoline.png" alt="" />
      </div>
      <div className=" header-navbar header-section">
        <NavLink className="header-sub-section link">
          <img src="/assets/dashboard-icon.png" alt="" />
          <p className="header-sub-section-heading">Dashboard</p>
        </NavLink>

        <NavLink to="/" style={activeLink} className="header-sub-section link">
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
