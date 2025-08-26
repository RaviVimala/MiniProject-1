import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BookManagement from "./pages/BookManagement";
import UserManagement from "./pages/UserManagement";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookDetails from "./pages/BookDetails";
import BookList from "./pages/BookList";   
import UserList from "./pages/UserList"; 
import CreateAccount from "./pages/CreateAccount"; 

// function Placeholder({ title }) {
//   return (
//     <div style={{ paddingTop: "100px", textAlign: "center", color: "white" }}>
//       <h2>{title}</h2>
//     </div>
//   );


 function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<BookManagement />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/CreateAccount" element={<CreateAccount />} errorElement={ <h1> page not found </h1>
        } />       
        
        <Route path="/booklist" element={<BookList />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </>
  );
}
export default App;