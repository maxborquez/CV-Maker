import "./CVPreview.css";

function CVPreview({ fullName, email, phone, experiences, skills }) {
  return (
    <div className="cv-preview">
      <div className="cv-header">
        <h1>{fullName}</h1>
        <h4>
          {email} | {phone}
        </h4>
      </div>

      <div className="cv-section">
        <h3>Experience</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-entry">
            <h4>{exp.company}</h4>
            <div className="position-row">
              <span>{exp.position}</span>
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul>
              {exp.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cv-section">
        <h3>Education</h3>
        <p>University Name</p>
      </div>

      <div className="cv-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CVPreview;
