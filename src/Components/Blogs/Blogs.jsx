import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ bookMarksMarks }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1>data : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} bookMarksMarks={bookMarksMarks}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
