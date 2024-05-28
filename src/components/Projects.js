import "./textContainer.css";

export const Projects = () => {
  return (
    <div className="Projects">
      <div class="text-container">
        <h3>Projects</h3>

        <section className="main-item">
          <span>Rail Shooter Game</span>
          <ul>
            <li>
              Developed an engaging rail shooter web application game for UCR Cutie Hack, a 12 hour competitive
              hackathon organized by students and sanctioned by the Computer Science Department.
            </li>
            <li>Javascript, HTML 5 Canvas API, Github, Visual Studio Code</li>
            <li>My responsibilities were to implement user input and user-enemy interactions.</li>
            <li>Worked with a group of three</li>
            <li>Awarded Best Project Theme /CSS</li>
            <li>Learned Javascript, and how HTML 5 Canvas and Javascript interact with each other</li>
          </ul>
        </section>
        <section className="main-item">
          <span>Maze Escape Game</span>
          <ul>
            <li>
              Developed a dynamic maze Unity game for UCR Citrus Hack , a 24 hour competitive hackathon organized by
              students and sanctioned by the Computer Science Department.
            </li>
            <li>Unity, C#, Github, Visual Studio Code</li>
            <li>Worked with one other group member who worked on graphics, animations, and audio</li>
            <li>
              My responsibilities were to implement maze creation logic, user input, scoring, and gameplay mechanics
            </li>
            <li>
              Learned about different types of maze creation algorithms, and the Unity Game development environment
            </li>
          </ul>
        </section>
        
      </div>
    </div>
  );
};
