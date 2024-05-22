import logo from "./logo.svg";
import "./App.css";
import "../src/components/About.css";
import About from "./components/About";
import Education from "./components/Education-Skills";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prufessional websight</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <About />
      <Education />
    </div>
  );
}

export default App;
