import { useState } from "react";
import "./App.css";
import CollapsibleSection from "./components/CollapsibleSection";
import CVPreview from "./components/CVPreview";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("John.Doe@gmail.com");
  const [phone, setPhone] = useState("+569 12345678");

  const [experiences, setExperiences] = useState([
    {
      company: "Valve",
      position: "Game Designer",
      startDate: "01/01/1999",
      endDate: "11/11/2011",
      tasks: ["Worked in Portal and Half Life"],
    },
  ]);

  const [skills, setSkills] = useState(["JavaScript", "React"]);

  return (
    <>
      <div id="header">CV Maker</div>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <CollapsibleSection title="Personal info">
            <PersonalInfo
              fullName={fullName}
              setFullName={setFullName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Experience">
            <Experience
              experiences={experiences}
              setExperiences={setExperiences}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Education">
            <input type="text" placeholder="University" />
          </CollapsibleSection>

          <CollapsibleSection title="Skills">
            <Skills skills={skills} setSkills={setSkills} />
          </CollapsibleSection>
        </div>
        <div>
          <CVPreview
            fullName={fullName}
            email={email}
            phone={phone}
            experiences={experiences}
            skills={skills}
          ></CVPreview>
        </div>
      </div>
    </>
  );
}

export default App;
