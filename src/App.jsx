import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import BookMarks from "./Components/BookMarks/BookMarks";
import Header from "./Components/header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [marksAsRead, setMarksAsRead] = useState(0);
  const bookMarksMarks = (blog) => {
    const newBlogMarks = [...bookMarks, blog];
    setBookMarks(newBlogMarks);
  };

  const handleMarksAsRead = (time) => {
    const newTime = marksAsRead + time;
    setMarksAsRead(newTime);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>
      <div className="md:flex gap-4 mb-7 mt-10">
        <Blogs
          bookMarksMarks={bookMarksMarks}
          handleMarksAsRead={handleMarksAsRead}
        ></Blogs>
        <BookMarks marksAsRead={marksAsRead} bookMarks={bookMarks}></BookMarks>
      </div>
    </div>
  );
}

export default App;
