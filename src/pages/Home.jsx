import React from "react";
import { useNavigate } from "react-router-dom";

 function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh",paddingTop: "80px",textAlign: "center",
        backgroundImage: "url('https://my.chartered.college/wp-content/uploads/2021/10/martin-adams-1062002-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",}}>
      <h1 style={{ fontSize: "48px",color: "#ddfd0aff",marginBottom: "16px",fontStyle: "revert-layer",textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
        }} > <br /><br />
        Welcome to Library Management System
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "24px", textShadow: "1px 1px 3px rgba(0,0,0,0.7)" }}>
        Manage your books and users easily with our system.
      </p>

      <button
        onClick={() => navigate("/Login")}
        style={{
          background: "orange",
          color: "#ffffffff",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          fontFamily:"fantasy",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
        }}>
        Get Started
      </button>

      {/* Cards Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "800px",
          margin: "50px auto",
        }}
      >
        <div
          onClick={() => navigate("/books")}
          style={{
            background: "rgba(217, 154, 165, 0.9)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        >
          <h2>📚 Book Management</h2>
          <p>Add, edit, or remove books from your library collection.</p>
        </div>
        <div
          onClick={() => navigate("/users")}
          style={{
            background: "rgba(217, 154, 165, 0.9)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
            cursor: "pointer",
          }}
        >
          <h2>👤 User Management</h2>
          <p>Manage user accounts and their borrowing activities.</p>
        </div>
      </div>
    </div>
  );
}
export default Home;