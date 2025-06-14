import { useState } from "react";

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: "white",
        maxWidth: "400px",
        width: "30vw"
      }}
    >
      <div
        onClick={toggle}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ margin: 0 }}>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
          }}
          className="collapsible"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default CollapsibleSection;
