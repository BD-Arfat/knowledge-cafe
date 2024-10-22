import React from "react";

const BookMark = ({ bookMark }) => {
  return (
    <div className="border border-green-300 rounded-lg mb-3 p-3">
      <h1 className="font-bold text-xl">{bookMark.title}</h1>
    </div>
  );
};

export default BookMark;
