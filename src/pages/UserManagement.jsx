import React, { useState } from "react";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please enter both Name & Email!");
    setUsers([...users, { name, email }]);
    setName("");
    setEmail("");
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div style={{ paddingTop: "100px", textAlign: "center", color: "white" }}>
      <h1>👤 User Management</h1>

      <form onSubmit={addUser} style={{ margin: "20px auto" }}>
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            background: "orange",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              margin: "10px auto",
              width: "300px",
              background: "#444",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <strong>{user.name}</strong> — {user.email}
            </span>
            <button
              onClick={() => deleteUser(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
