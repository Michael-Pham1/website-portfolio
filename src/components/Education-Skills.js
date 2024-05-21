import "./Education-Skills.css";

function EducationSkills() {
  return (
    <div className="Education-Skills">
      <main>
        <div>
          <h3>Education</h3>
          <ul>
            <li className="main-item">
              <span>Live Oak High School</span>
              <ul>
                <li>August 2015 - June 2019</li>
                <li>High School Diploma</li>
              </ul>
            </li>

            <li className="main-item">
              <span>De Anza Community College</span>
              <ul>
                <li>June 2019 - July 2022</li>
              </ul>
            </li>

            <li className="main-item">
              <span>University of California, Riverside</span>
              <ul>
                <li>September 2022 - Present</li>
                <li>Bachelors of Science, Computer Science</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3>Skills</h3>
            <ul>
              <li className="main-item" >
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
              </li>
              <li className="main-item">
                <span>Tools</span>
                <ul>
                  <li>Git</li>
                  <li>Firebase</li>
                  <li>VSCode</li>
                </ul>
              </li>
            </ul>
        </div>
      </main>
    </div>
  );
}

export default EducationSkills;
