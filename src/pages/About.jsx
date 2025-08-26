import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px", textAlign: "center", color: "purple", margin:'30px'}}>
      <h2>📖 Our Mission:</h2>
      <p >To revolutionize how users access and manage information by providing a seamless, digital platform for e-books, journals, and other digital resources. We strive to 
        enhance the learning experience by making resources easily discoverable and accessible anytime, anywhere. </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: "#444",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>

        <button
          onClick={() => navigate("/contact")}
          style={{
            padding: "10px 20px",
            background: "#B22222",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
export default About;