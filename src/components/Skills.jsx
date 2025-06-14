function Skills({ skills, setSkills }) {
  return (
    <div>
      {skills.map((skill, index) => (
        <input
          key={index}
          type="text"
          value={skill}
          onChange={(e) => {
            const updated = [...skills];
            updated[index] = e.target.value;
            setSkills(updated);
          }}
          placeholder={`Skill ${index + 1}`}
          style={{ marginBottom: "10px", display: "block" }}
        />
      ))}
      <button onClick={() => setSkills([...skills, ""])}>Add skill</button>
    </div>
  );
}

export default Skills;
