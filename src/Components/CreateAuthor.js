import React, { useEffect, useState } from "react";
import db, { auth } from "./Firebase";

function CreateAuthor() {
  const [title, setTitle] = useState("");
  const [img_url, setImg_url] = useState("");
  const [author, setAuthor] = useState("");
  const [authors, setAuthors] = useState([]);

  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    db.collection("authors").onSnapshot((snap) => {
      setAuthors(snap.docs.map((doc) => ({ id: doc.id })));
    });
  }, []);
  useEffect(() => {
    let matches = authors.filter((_id) => {
      //   const regex = new RegExp(`/^${author}$/`, "gi");
      return _id.id === `${title}`;
    });
    console.log(matches);
    setIsAvailable(matches.length === 0 && true);
  }, [title]);

  return (
    <div style={{ display: "flex" }} className="create-blog">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          db.collection("authors")
            .doc(title)
            .set({
              author: author,
            })
            .then(() => alert("done"));
        }}
      >
        <input
          value={title}
          required
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="url"
        />
        <input
          value={author}
          required
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />

        <button type="submit">
          {isAvailable ? "SUBMIT" : <i class="fas fa-times    "></i>}
        </button>
      </form>
    </div>
  );
}

export default CreateAuthor;
