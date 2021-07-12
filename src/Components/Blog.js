import React, { useEffect, useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import db from "./Firebase";

function Blog({ id, article, author, img_url, min, tags, timestamp, title }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
      to={`/id/${id}`}
      data-aos="zoom-in"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className={` blog`}
      >
        {/*  */}

        {/*  */}
        {/*  */}

        <div className="blog-title">{title}</div>
        {!showMore ? (
          <div className="blog-desc">
            {article?.substr(0, 140)}{" "}
            <span onClick={() => setShowMore(!showMore)}>[...]</span>{" "}
          </div>
        ) : (
          <div className="blog-desc">
            {article}
            <span onClick={() => setShowMore(!showMore)}>[Show Less]</span>{" "}
          </div>
        )}

        {/*  */}
        {/*  */}

        <div className="blog-footer">
          <div className="blog-link blog-footer-writer">
            <i class="fas fa-feather-alt    "></i>
            <div className="name">{author}</div>
          </div>
          <div className="blog-link  blog-footer-date">
            <i class="fas fa-calendar    "></i>
            <div className="name">
              {new Date(timestamp?.toDate()).toLocaleDateString()}
            </div>
          </div>
          <div className="blog-link  blog-footer-min">
            <i class="fas fa-clock    "></i>
            <div className="name">{min} মিনিট</div>
          </div>
        </div>
        <div
          onClick={() => {
            let a = window.confirm("?");
            if (a) {
              db.collection("blogs")
                .doc(id)
                .delete()
                .then(() => alert("delted"))
                .catch((err) => {
                  alert(err.message);
                });
            }
          }}
          className="del"
        >
          <i class="fas fa-trash    "></i>
        </div>
      </motion.div>
    </div>
  );
}

export default Blog;
