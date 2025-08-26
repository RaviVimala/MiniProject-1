import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "250px", textAlign: "center",
      backgroundImage: "URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9T9LbJFR3bnYX1xzJNWvPklj6N_pL7BXN94rl9LJ4pj8nnhYeR4wIK338sW8IkS6FkQs&usqp=CAU')",
      backgroundSize:"1000px",
       backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
 }}>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        
        {/* Total Books */}
        <div
          onClick={() => navigate("/Books")}
          style={{
            background: "#949494ff",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            cursor: "pointer",
            boxShadow: "0 5px 8px rgba(74, 64, 135, 0.3)"
          }}
        > 
          <h2>Total Books</h2>
          <h3 style={{ color: "orange" }}>10</h3>
          <p>Click to view all books</p>
        </div>

        {/* Total Users */}
        <div
          onClick={() => navigate("/UserList")}
          style={{
            background: "#949494ff",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "250px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}
        >
          <h2>Total Users</h2>
          <h3 style={{ color: "lightgreen" }}>5</h3>
          <p>Click to view all users</p>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;