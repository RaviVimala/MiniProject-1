import React from "react";


export default function UserList() {
  const users = [
    { id: 1, name: "Mr.Ravisankar", email: "Ravisankar@example.com" },
    { id: 2, name: "Mrs.Vimala", email: "VimalaR@example.com" },
    { id: 3, name: "Mr.Saravanan", email: "Saravanaravi@example.com" },
    { id: 4, name: "Mr.Prabhu", email: "Prabhuv@example.com" },
    { id: 5, name: "Mr.Arun", email: "Arun123@example.com" },
    { id: 5, name: "Mr.Kathir", email: "Kathir321@example.com" },
    { id: 5, name: "Mr.Ram", email: "Ramp@example.com" },
    { id: 5, name: "Mr.Duraikumar", email: "Dkumar@example.com" },

  ];

  return (
    <div style={{ paddingTop: "100px", textAlign: "center", color: "black" }}>
      <h1>👥 User List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              margin: "10px auto",
              width: "350px",
              background: "#444",
              padding: "10px",
              borderRadius: "8px",
              color: "white",
            }}
          >
            <strong>{user.name}</strong> <br />
            <small>{user.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
