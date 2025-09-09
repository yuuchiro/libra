import { useState } from "react";

const Book = ({ bookData }) => {
  const [bookHeight, setBookHeight] = useState("h-26");
  return (
    <li
      onClick={() =>
        bookHeight === "h-26" ? setBookHeight("h-max") : setBookHeight("h-26")
      }
      className={`w-1/3 bg-white p-3 rounded-3xl my-2 cursor-pointer transition duration-150 hover:scale-105 ${bookHeight} overflow-hidden`}
    >
      <div className="flex justify-between">
        <h2 className="pb-1 pt-3 px-3 text-indigo-800 font-light font-roboto-slab">
          {bookData.author}
        </h2>
        <div className="flex items-center bg-indigo-200 h-6 rounded-2xl">
          {!bookData.isAvailable && (
            <span className="text-sm pl-3 text-indigo-500 font-medium">
              {`Not available until ${bookData.returnDate}`}
            </span>
          )}
          <ion-icon
            name={bookData.isAvailable ? "checkmark" : "close"}
            className="text-indigo-500 text-l bg-indigo-200 p-1 rounded-4xl"
          ></ion-icon>
        </div>
      </div>

      <h1 className="pb-2 px-3 font-roboto-slab text-indigo-800 text-2xl font-normal">
        {bookData.title}
      </h1>

      <p className="p-3 font-light text-indigo-800">{bookData.description}</p>
    </li>
  );
};

export default Book;
