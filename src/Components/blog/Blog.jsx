import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaBeer } from "react-icons/fa";

const Blog = ({ blog, bookMarksMarks }) => {
  const { cover, title, date, author, author_image, reading_time, hashtag } =
    blog;
  return (
    <div className="mb-16">
      <div>
        <img src={cover} className="mb-3" alt="" />
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <img src={author_image} className="w-16 h-16 rounded-full" alt="" />
            <div>
              <h1 className="font-bold text-2xl">{author}</h1>
              <p>{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl">
              {reading_time} <span>min read</span>
            </p>
            <button onClick={() => bookMarksMarks(blog)}>
              <CiBookmark className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <h1 className="font-bold text-3xl mt-3">{title}</h1>
        <p className="text-xl mt-4 mb-6">{hashtag}</p>
      </div>
      <a href="" className="text-xl underline text-blue-700">
        Mark as read
      </a>
    </div>
  );
};

export default Blog;
