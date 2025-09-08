import { useState } from "react";
import Book from "./Book";
import useBooks from "../hooks/useBooks";

const BookList = () => {
  const fetchedList = useBooks();
  let books = [];

  const [filters, setFilters] = useState({
    searchPhrase: "",
    isCbxChecked: false,
    sortBy: "title",
  });

  const filterList = () => {
    if (!fetchedList) return;
    if (filters.isCbxChecked) {
      books = fetchedList.filter(
        (book) =>
          book.title.toLowerCase().includes(filters.searchPhrase) ||
          (book.author.toLowerCase().includes(filters.searchPhrase) &&
            book.isAvailable === true)
      );
    } else {
      books = fetchedList.filter(
        (book) =>
          book.title.toLowerCase().includes(filters.searchPhrase) ||
          book.author.toLowerCase().includes(filters.searchPhrase)
      );
    }
  };

  const sortList = (list, sortCondition) => {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length - 1; j++) {
        if (
          list[j][sortCondition].charCodeAt(0) >
          list[j + 1][sortCondition].charCodeAt(0)
        ) {
          const temp = list[j];
          list[j] = list[j + 1];
          list[j + 1] = temp;
        }
      }
    }
    return list;
  };

  books = sortList(fetchedList, filters.sortBy);
  filterList();

  const resetListHandler = () => {
    books = fetchedList;
    setFilters({ searchPhrase: "", isCbxChecked: false, sortBy: "title" });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={filters.searchPhrase}
          onChange={(ev) =>
            setFilters((prev) => ({
              ...prev,
              searchPhrase: ev.target.value.toLowerCase().trim(),
            }))
          }
        />
        <label htmlFor="sortSelect">Sort by:</label>
        <select
          id="sortSelect"
          value={filters.sortBy}
          onChange={(ev) =>
            setFilters((prev) => ({ ...prev, sortBy: ev.target.value }))
          }
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <label htmlFor="showAvailableOnlyCheckbox">Show only available</label>
        <input
          type="checkbox"
          id="showAvailableOnlyCheckbox"
          checked={filters.isCbxChecked}
          onChange={() => {
            setFilters((prev) => ({
              ...prev,
              isCbxChecked: !prev.isCbxChecked,
            }));
          }}
        />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            resetListHandler();
          }}
        >
          Reset
        </button>
      </form>
      <p>Books found: {books ? books.length : "0"}</p>
      <ul>
        {!books ? (
          <h1>Rendering list</h1>
        ) : (
          books.map((book) => <Book key={book.id} bookData={book} />)
        )}
      </ul>
    </div>
  );
};

export default BookList;
