import "./textContainer.css";

function Experience() {
  return (
    <div className="text-container">
      <h3>Experience</h3>
      <ul>
        <li className="main-item">
          <span>Software Engineering Intern</span> -{" "}
          <span style={{ fontStyle: "italic", fontWeight: "normal" }}> Trapnstudio</span>
          <ul>
            <li>September 2022 - Present</li>
            <li>
              Created and maintained song queueing website that enables real-time interactivity between participants and
              DJ's
            </li>
            <li>Flutter, Dart, Git, Firebase, Next.js</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Experience;
