function Experience({ experiences, setExperiences }) {
  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const handleTaskChange = (index, taskIndex, value) => {
    const updated = [...experiences];
    updated[index].tasks[taskIndex] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        tasks: [""],
      },
    ]);
  };

  const addTask = (index) => {
    const updated = [...experiences];
    updated[index].tasks.push("");
    setExperiences(updated);
  };

  return (
    <>
      {experiences.map((exp, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            placeholder="Company name"
            style={{ marginLeft: "10px" }}
          />
          <input
            type="text"
            value={exp.position}
            onChange={(e) => handleChange(index, "position", e.target.value)}
            placeholder="Position"
            style={{ marginLeft: "10px" }}
          />
          <input
            type="date"
            value={exp.startDate}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
            placeholder="Start date"
            style={{ marginLeft: "10px" }}
          />
          <input
            type="date"
            value={exp.endDate}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
            placeholder="End date"
            style={{ marginLeft: "10px" }}
          />

          <ul>
            {exp.tasks.map((task, taskIndex) => (
              <li key={taskIndex}>
                <input
                  type="text"
                  value={task}
                  onChange={(e) =>
                    handleTaskChange(index, taskIndex, e.target.value)
                  }
                  placeholder={`Task ${taskIndex + 1}`}
                  style={{ marginLeft: "10px" }}
                />
              </li>
            ))}
          </ul>
          <button onClick={() => addTask(index)} style={{ marginTop: "10px" }}>
            Add task
          </button>
        </div>
      ))}
      <button onClick={addExperience}>Add experience</button>
    </>
  );
}

export default Experience;
