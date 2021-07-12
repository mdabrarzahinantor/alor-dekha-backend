import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import db from "./Firebase";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    db.collection("blogs")
      .orderBy("timestamp")

      .onSnapshot((snap) => {
        setBlogs(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="home">
      <section>
        {blogs.map((blog) => {
          return (
            <Blog
              key={blog?.id}
              id={blog?.id}
              article={blog?.data.article}
              author={blog?.data.author}
              img_url={blog?.data.img_url}
              min={blog?.data.min}
              tags={blog?.data.tags}
              timestamp={blog?.data.timestamp}
              title={blog?.data.title}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Home;
