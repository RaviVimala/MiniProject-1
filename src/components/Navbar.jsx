import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background:"#F3F2F2",
        padding: "15px",
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}>

       <Link to="/Login" style={{ color: "blue", textDecoration: "none" }}>Login</Link>
      <Link to="/" style={{ color: "blue", textDecoration: "none" }}>Home</Link>
      <Link to="/dashboard" style={{ color: "blue", textDecoration: "none" }}>Dashboard</Link>
      <Link to="/booklist" style={{ color: "blue", textDecoration: "none" }}>Books</Link>
      <Link to="/UserList" style={{ color: "blue", textDecoration: "none" }}>Users</Link>
      <Link to="/about" style={{ color: "blue", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ color: "blue", textDecoration: "none" }}>Contact</Link>
       {/* <Link to="/create account" style={{ color: "blue", textDecoration: "none" }}>Create an Account</Link> */}
     
    </nav>
  );
}
export default Navbar;