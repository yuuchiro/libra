import { useState } from "react";
import BookList from "../components/BookList";

const HomePage = () => {
  const [filters, setFilters] = useState({
    searchPhrase: "",
    showAvailavleOnly: false,
    sortBy: "title",
  });

  const resetListHandler = (ev) => {
    ev.preventDefault();

    setFilters({ searchPhrase: "", isCbxChecked: false, sortBy: "title" });
  };

  const sortButtonsToggle = (ev) => {
    ev.preventDefault();
    if (filters.sortBy === ev.target.value) return;

    setFilters((prev) => ({ ...prev, sortBy: ev.target.value }));
  };

  const showAvailableToggle = (ev) => {
    ev.preventDefault();

    if (filters.showAvailavleOnly) {
      setFilters((prev) => ({ ...prev, showAvailavleOnly: false }));
      return;
    }
    setFilters((prev) => ({ ...prev, showAvailavleOnly: true }));
  };
  return (
    <>
      <div className="w-full h-75 bg-linear-to-t from-indigo-500 to-violet-500 grid place-items-center p-10">
        <h1 className="text-5xl font-roboto-slab font-bold text-white">
          LibreoReact
        </h1>
        <input
          type="text"
          className="bg-linear-to-l from-indigo-800 to-violet-800 w-1/3 h-10 rounded-2xl p-6 text-white font-extralight outline-none"
          placeholder="What would you like to read?"
          value={filters.searchPhrase}
          onChange={(ev) => {
            setFilters((prev) => ({ ...prev, searchPhrase: ev.target.value }));
          }}
        />
      </div>

      <BookList
        resetListHandler={resetListHandler}
        sortButtonsToggle={sortButtonsToggle}
        showAvailableToggle={showAvailableToggle}
        filters={filters}
      />
    </>
  );
};

export default HomePage;
