import { useState } from "react";
import "./footer.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";

function Footer() {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <div className="footer-section">
      <div className="toggle" onClick={() => setIsToggle(() => !isToggle)}>
        <span>
          {isToggle ? (
            <FaToggleOn className="toggle-img" />
          ) : (
            <FaToggleOff className="toggle-img" />
          )}
        </span>
        <span className="text">correct answer sound on</span>
      </div>
      <button className="submit-btn">
        <span>Submit for final grading</span>
        <img src="/assets/rocket-02.png" />
      </button>
    </div>
  );
}

export default Footer;
