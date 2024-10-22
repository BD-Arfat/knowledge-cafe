import React from "react";
import BookMark from "../bookMark/BookMark";

const BookMarks = ({ bookMarks }) => {
  return (
    <div>
      <div className="md:w-1/3">
        <h1>ami BookMarks:{bookMarks.length}</h1>
        <div className="mb-3 w-96">
          {bookMarks.map((bookMark) => (
            <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarks;
