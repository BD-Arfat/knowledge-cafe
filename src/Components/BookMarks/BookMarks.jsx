import React from "react";
import BookMark from "../bookMark/BookMark";

const BookMarks = ({ bookMarks, marksAsRead }) => {
  return (
    <div>
      <div className="md:w-1/3">
        <div>
          <div className="bg-slate-500 w-96 p-5 text-white rounded-md mb-5">
            <h1 className="font-bold text-xl">Reading Time : {marksAsRead}</h1>
          </div>
          <div className="mb-3 w-96">
            {bookMarks.map((bookMark) => (
              <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarks;
