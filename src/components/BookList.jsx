import Book from "./Book";
import useBooks from "../hooks/useBooks";

const BookList = ({
  resetListHandler,
  sortButtonsToggle,
  showAvailableToggle,
  filters,
}) => {
  let books = [];

  const fetchedList = useBooks();

  const filterList = () => {
    if (!fetchedList) return;
    let tempList = fetchedList;
    if (filters.searchPhrase.length > 0) {
      tempList = tempList.filter(
        (book) =>
          book.title.toLowerCase().includes(filters.searchPhrase) ||
          book.author.toLowerCase().includes(filters.searchPhrase)
      );
    }

    if (filters.showAvailavleOnly) {
      tempList = tempList.filter((book) => book.isAvailable);
    }

    books = tempList;
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

  return (
    <div className="bg-indigo-100">
      <form className="sticky top-0 z-10 flex items-center justify-center py-3 bg-indigo-200 rounded-b-3xl">
        <label htmlFor="sortSelect" className="mx-2 text-indigo-500">
          Sort by
        </label>
        <div className="mx-2">
          <button
            className={`${
              filters.sortBy === "title"
                ? "bg-indigo-500 text-white"
                : "text-indigo-500"
            } w-20 py-1  rounded-l-4xl border border-indigo-500 cursor-pointer font-medium transition duration-150`}
            value={"title"}
            onClick={sortButtonsToggle}
          >
            Title
          </button>
          <button
            className={`${
              filters.sortBy === "author"
                ? "bg-indigo-500 text-white"
                : "text-indigo-500"
            } w-20 py-1 rounded-r-4xl border border-indigo-500 cursor-pointer font-medium transition duration-150`}
            value={"author"}
            onClick={sortButtonsToggle}
          >
            Author
          </button>
        </div>
        <button
          className={`${
            filters.showAvailavleOnly
              ? "bg-indigo-500 text-white"
              : "bg-transparent text-indigo-500"
          } rounded-4xl font-medium w-45 py-1 mx-2 cursor-pointer border border-indigo-500 transition duration-150`}
          onClick={showAvailableToggle}
        >
          Show only available
        </button>
        <button
          className="w-20 py-1 mx-2 font-medium text-white bg-indigo-500 border border-indigo-500 cursor-pointer rounded-4xl"
          onClick={resetListHandler}
        >
          Reset
        </button>
      </form>
      <p className="my-5 text-center text-indigo-500">
        found {books ? books.length : "0"} books
      </p>
      <ul className="grid place-items-center">
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
