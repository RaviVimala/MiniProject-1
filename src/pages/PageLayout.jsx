import React from "react";
import { useNavigate } from "react-router-dom";

export default function PageLayout({ title, prev, next, children }) {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: "100px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>{title}</h2>
      {children}
      <div style={{ marginTop: "20px" }}>
        {prev && (
          <button
            onClick={() => navigate(prev)}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#444",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            ← Back
          </button>
        )}
        {next && (
          <button
            onClick={() => navigate(next)}
            style={{
              padding: "10px 20px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
