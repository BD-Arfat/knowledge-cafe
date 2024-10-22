import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const bookMarksMarks = (blog) => {
    console.log("bookMarks");
  };
  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="md:flex gap-4 mb-7">
        <Blogs bookMarksMarks={bookMarksMarks}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  );
}

export default App;
