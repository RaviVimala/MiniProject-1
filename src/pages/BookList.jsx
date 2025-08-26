import React from "react";

 function BookList() {
  const books = [
    { id: 1, title: "Pride and	Prejudice (1813)  ", Author:"J.	Austen" },
    { id: 2, title: "American	Notes (1842)", Author:"C.	Dickens"  },
    { id: 3, title: "Coral	Reefs	(1842)" , Author:"C.Darwin" },
    { id: 4, title: "A Tale of	Two Cities	(1859)" , Author:"C.	Dickens" },
    { id: 5, title: " The  Moonstone  (1868) " , Author:"W. Collins" },
    { id: 6, title: " Expression  of  Emotions	(1872) ", Author:"C.	Darwin"  },
    { id: 7, title: "A	Pair	of	Blue Eyes  (1873) " , Author:"T.	Hardy" },
    { id: 8, title: "Jude the Obscure (1895) " , Author:"T.	Hardy" },
    { id: 9, title: " Dracula's Guest	(1897) " , Author:"B. Stoker" },
    { id: 10, title: "Uncle Bernac	(1897)" , Author:"A.	C.	Doyle" },
  ];

  return (
    <>
    <div
      style={{
        paddingTop: "100px",
        textAlign: "center",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>📚 All Books</h1>
    
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((book) => (
          <li key={book.id} style={{ margin: "10px 0", fontSize: "18px",justifyContent:"space-between" }}>
            {book.title}
            {book.Author}
          </li>
        ))}
      </ul>
    </div>
    
    </>
  );
}
export default BookList;