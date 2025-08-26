import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Correct import

function Books() {
  const [books, setBooks] = useState([
    { id: 1, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title || !author) {
      alert("Please enter both title and author");
      return;
    }
    const newBook = { id: books.length + 1, title, author };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  return (
    <div style={{ padding: "20px", marginTop: "80px", textAlign: "center" }}>
      <h2 style={{ color: "white" }}>📚 Books Management</h2>

      {/* Add Book Form */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button
          onClick={addBook}
          style={{
            padding: "8px 15px",
            background: "orange",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Book
        </button>
      </div>

      {/* Book List */}
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            background: "#535354ff",
            color: "white",
          }}
        >
          <thead>
            <tr style={{ background: "#333" }}>
              <th style={{ padding: "10px", border: "1px solid #555" }}>ID</th>
              <th style={{ padding: "10px", border: "1px solid #555" }}>Title</th>
              <th style={{ padding: "10px", border: "1px solid #555" }}>
                Author
              </th>
              <th style={{ padding: "10px", border: "1px solid #555" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td style={{ padding: "10px", border: "1px solid #555" }}>
                  {book.id}
                </td>
                <td style={{ padding: "10px", border: "1px solid #555" }}>
                  {book.title}
                </td>
                <td style={{ padding: "10px", border: "1px solid #555" }}>
                  {book.author}
                </td>
                <td style={{ padding: "10px", border: "1px solid #555" }}>
                  {/* ✅ Link to book details page */}
                  <Link to={`/books/${book.id}`}>
                    <button
                      style={{
                        background: "orange",
                        border: "none",
                        padding: "6px 12px",
                        cursor: "pointer",
                      }}
                    >
                      Read Now
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Books;