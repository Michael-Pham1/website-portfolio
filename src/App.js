import "./App.css";
import About from "./components/About";
import EducationSkills from "./components/Education-Skills";
import NavBar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="home" className="parallax-1">
        <h1>Welcome!</h1>
      </div>
      <div id="about" className="main-content">
        <About />
      </div>
      <div className="parallax-2"></div>
      <div id="education-skills" className="main-content">
        <EducationSkills />
      </div>
      <div id="experience" className="main-content">
        <Experience />
      </div>
    </div>
  );
}

export default App;
