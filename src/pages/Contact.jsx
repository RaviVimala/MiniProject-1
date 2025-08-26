import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields!");
      return;
    }
    alert(`📩 Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" }); // reset
  };

  return (
    <div style={{ paddingTop: "100px", textAlign: "center", color: "white" }}>
      <h1 style={{color:'black', alignItems:'center'}}>📞 Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "20px auto",
          width: "400px",
          background: "#444",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "left",
        }}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          style={{
            width: "100%",
            padding: "8px",
            margin: "8px 0",
            borderRadius: "5px",
            border: "none",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            background: "orange",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default Contact;