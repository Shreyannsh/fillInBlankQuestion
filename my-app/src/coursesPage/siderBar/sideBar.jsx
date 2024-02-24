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
            <img src="assets/Book.png" alt="" />
            <p>Saxon Math 5/4</p>
          </div>
          <div className="lower-section">
            <input type="'text" placeholder="Search" />
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
