import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const bookMarksMarks = (blog) => {
    const newBlogMarks = [...bookMarks, blog];
    setBookMarks(newBlogMarks);
  };
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="md:flex gap-4 mb-7">
        <Blogs bookMarksMarks={bookMarksMarks}></Blogs>
        <BookMarks bookMarks={bookMarks}></BookMarks>
      </div>
    </div>
  );
}

export default App;
