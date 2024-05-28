import "./App.css";
import About from "./components/About";
import EducationSkills from "./components/Education-Skills";
import NavBar from "./components/Navbar";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home" className="parallax-1">
        <h1>Michael Pham</h1>
        <p style={{fontSize: '20px'}}>
          Hi, I'm Michael Pham, student in Computer Science at the University of California, Riverside, rock climber,
          and music enthuisiast!
        </p>
      </div>
      <div id="about" className="main-content">
        <About />
      </div>
      <div className="parallax-2"></div>
      <div id="education-skills" className="main-content">
        <EducationSkills />
      </div>
      <div className="parallax-3"></div>
      <div id="experience" className="main-content">
        <Experience />
      </div>
      <div className="parallax-4"></div>
      <div id="projects" className="main-content">
        <Projects />
      </div>
      <div id="footer" className="main-content">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
