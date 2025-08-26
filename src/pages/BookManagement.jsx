import React, { useState } from "react";
import { Link } from "react-router-dom";

function BookManagement() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = (e) => {
    e.preventDefault();
    if (!title || !author) return alert("Please enter both Title & Author!");
    const newBook = {
      id: Date.now(), // ✅ unique id for each book
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div style={{ paddingTop: "100px", textAlign: "center", color: "GrayText" }}>
      <h1>📚 Book Management</h1>

      {/* Add Book Form */}
      <form onSubmit={addBook} style={{ margin: "20px auto" }}>
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
          type="submit"
          style={{
            padding: "8px 16px",
            background: "orange",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }} >
          Add Book
        </button>
      </form>

      {/* Books List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((book) => (
          <li
            key={book.id}
            style={{
              margin: "10px auto",
              width: "350px",
              background: "#444",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
            }}
          >
            <span>
              <strong>{book.title}</strong> — {book.author}
            </span>
            <div>
              {/* ✅ Read Now button */}
              <Link to={`/books/${book.id}`}>
                <button
                  style={{
                    background: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                >
                  Read Now
                </button>
              </Link>

              {/* ❌ Delete button */}
              <button
                onClick={() => deleteBook(book.id)}
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BookManagement;