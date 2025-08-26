import React from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams(); // URLல இருந்து book id எடுக்கிறது

  return (
    <div style={{ paddingTop: "100px", textAlign: "center", color: "white" }}>
      <h1>📖 Book Details</h1>
      <p>Currently reading book with ID: <strong>{id}</strong></p>
      <p>👉 இங்க தான் full book content அல்லது external link display பண்ணலாம்.</p>
    </div>
  );
}
export default BookDetails;