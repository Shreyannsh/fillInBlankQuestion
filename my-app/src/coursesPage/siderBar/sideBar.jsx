import "./sideBar.css";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="cursor">
        <img src="assets/Featured icon.png" alt="" />
      </div>
      <div className="lesson">
        <div className="lesson-header">
          <div className="upper-section">
            <img className="upper-section-image" src="assets/Book.png" alt="" />
            <p className="upper-section-text">Saxon Math 5/4</p>
          </div>
          <div className="lower-section">
            <img src="assets/search-icon" className="search-icon" alt="" />
            <input className="input" type="'text" placeholder="Search" />
          </div>
        </div>
        <div>
          <p> Lesson 5</p>

          <p>Assignment Title Here</p>
          <div>
            <p>Questions:</p>
            <p>30 questions</p>
          </div>
          <div>
            <h2>Questions</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
