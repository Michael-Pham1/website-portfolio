import "./textContainer.css";

function Experience() {
  return (
    <div className="text-container">
      <h3>Experience</h3>
      <section className="main-item">
        <span>Software Engineering Intern / Team Lead</span> -{" "}
        <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
          {" "}
          <a href="https://www.trapnstudio.com/trapnstudio" target="_blank">Trapnstudio</a> (September 2022 - Present)
        </span>
        <ul>
          <li>
            Developed a web application enabling live music cueing for DJs, enhancing user-DJ interaction during events.
          </li>
          <li>
            Implemented a real-time notification system to alert DJs of user-submitted music requests using Firebase Cloud Functions, increasing
            engagement and responsiveness.
          </li>
          <li>
            Used Spotify API to display tempo and Camelot wheel values to the DJ in order to smooth transitions between
            songs and enhance user experience.
          </li>
          <li>Development process uses Scrum, with weekly sprints, daily standups, and pair programming</li>
          <li>Worked with marketing team to deliver highly polished commercial product releases</li>
          <li>Led team of software engineering interns to develop product</li>
          <li>Flutter, Dart, Git, Firebase, Node.js</li>
        </ul>
      </section>
    </div>
  );
}

export default Experience;
