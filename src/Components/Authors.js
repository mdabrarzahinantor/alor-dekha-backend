import React, { useState } from "react";
import db, { auth } from "./Firebase";

function Authors() {
  const [authors, setAuthors] = useState([]);
  db.collection("authors").onSnapshot((snap) =>
    setAuthors(
      snap.docs.map((doc) => ({
        id: doc.id,
        author: doc.data().author,
      }))
    )
  );
  return (
    <ul className="authors">
      {authors?.map((author) => (
        <li>
          <div>{author.id}</div>
          <div>{author.author}</div>
        </li>
      ))}
    </ul>
  );
}

export default Authors;
