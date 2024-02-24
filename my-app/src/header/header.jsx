import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-section">
        <img src="/assets/logo.png" alt="" />
        <img src="/assets/logoline.png" alt="" />
      </div>
      <div className="header-section">
        <div className="header-sub-section">
          <Link className="link">
            <img src="/assets/dashboard-icon.png" alt="" />
            <p className="header-sub-section-heading">Dashboard</p>
          </Link>
        </div>
        <div className="header-sub-section">
          <Link to="/courses" className="link">
            <img src="/assets/course-icon.png" alt="" />
            <p className="header-sub-section-heading">Courses</p>
          </Link>
        </div>

        <div className="header-sub-section">
          <Link className="link">
            <img src="/assets/learning-lab-icon.png" alt="" />
            <p className="header-sub-section-heading">Learning Lab</p>
          </Link>
        </div>
        <div className="header-sub-section">
          <Link className="link">
            <img src="/assets/achievment-icon.png" alt="" />
            <p className="header-sub-section-heading">Achievements</p>
          </Link>
        </div>
      </div>
      <div className="header-section">
        <img src="/assets/Notifcation and Profile.png" alt="" />
      </div>
    </div>
  );
}
export default Header;
