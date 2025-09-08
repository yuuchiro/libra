import BookList from "../components/BookList";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-75 bg-linear-to-t from-indigo-500 to-violet-500 grid place-items-center p-10">
        <h1 className="text-5xl font-roboto-slab font-bold text-white">
          LibreoReact
        </h1>
        <input
          type="text"
          className="bg-linear-to-l from-indigo-800 to-violet-800 w-1/3 h-15 rounded-3xl p-6 text-white font-extralight outline-none"
          placeholder="What would you like to read?"
        />
      </div>

      <BookList />
    </>
  );
};

export default HomePage;
