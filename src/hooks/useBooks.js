import { useEffect, useState } from "react";

const useBooks = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/books.json");
      if (response.ok) {
        const data = await response.json();
        setBooksList(data);
      }
    };

    fetchBooks();
  }, []);

  return booksList;
};
export default useBooks;
