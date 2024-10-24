import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({ bookMarksMarks, handleMarksAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleMarksAsRead={handleMarksAsRead}
          bookMarksMarks={bookMarksMarks}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
