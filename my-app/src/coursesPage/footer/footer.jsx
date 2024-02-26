import { useState } from "react";
import "./footer.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";

export default function Footer() {
  const [isToggle, setIsToggle] = useState(true);
  return (
    <div className="footer-section">
      <div onClick={() => setIsToggle(() => !isToggle)}>
        {isToggle ? <FaToggleOn /> : <FaToggleOff />} correct answer sound on
      </div>
      <button className="submit-btn">
        Submit for final grading <img src="/assets/rocket-02.png" />
      </button>
    </div>
  );
}
