import "./Education-Skills.css";
import "./textContainer.css";

function EducationSkills() {
  return (
    <div className="Education-Skills">
      <main>
        <div class="text-container">
          <h3>Education</h3>

          <section className="main-item">
            <span>Live Oak High School</span>
            <ul>
              <li>August 2015 - June 2019</li>
              <li>High School Diploma</li>
            </ul>
          </section>

          <section className="main-item">
            <span>De Anza Community College</span>
            <ul>
              <li>June 2019 - July 2022</li>
            </ul>
          </section>

          <section className="main-item">
            <span>University of California, Riverside</span>
            <ul>
              <li>September 2022 - Present</li>
              <li>Bachelors of Science, Computer Science</li>
            </ul>
          </section>
        </div>
        <div class="text-container">
          <h3>Skills</h3>

          <section className="main-item">
            <span>Languages and Frameworks</span>
            <ul>
              <li>C++</li>
              <li>Python</li>
              <li>Flutter</li>
              <li>Dart</li>
              <li>HTML/CSS</li>
              <li>React</li>
              <li>Next.js</li>
            </ul>
          </section>
          <section className="main-item">
            <span>Tools</span>
            <ul>
              <li>Git</li>
              <li>Firebase</li>
              <li>VSCode</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default EducationSkills;
