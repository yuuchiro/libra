const Book = ({ bookData }) => {
  return (
    <li>
      <h1>{bookData.title}</h1>
      <h2>{bookData.author}</h2>
      <span>
        {bookData.isAvailable
          ? "Available"
          : `Not available until ${bookData.returnDate}`}
      </span>
      <p>{bookData.description}</p>
    </li>
  );
};

export default Book;
