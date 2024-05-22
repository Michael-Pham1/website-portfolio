import logo from "./anime-woman.png";
import "./App.css";
import About from "./components/About";
import EducationSkills from "./components/Education-Skills";
import NavBar from "./components/Navbar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prufessional websight</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NavBar />
      <div id="main-content">
        <div id="about">
          <About />
        </div>
        <div id="education-skills">
          <EducationSkills />
        </div>
        <div id="experience">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default App;
