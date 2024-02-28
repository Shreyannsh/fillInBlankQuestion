import logo from "./logo.svg";
import "./App.css";
import Header from "./header/header";
import { Route, Routes } from "react-router-dom";
import CoursesPage from "./coursesPage/coursesPage";
import QuestionSection from "./coursesPage/questionSection/questionSection";
import FloatingNavbar from "./component/floatingNavbar/floatingNavbar";

function App() {
  return (
    <div className="App">
      <Header />
      <FloatingNavbar />
      <Routes>
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </div>
  );
}

export default App;
