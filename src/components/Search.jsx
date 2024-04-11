import { FaYoutube } from "react-icons/fa6";
function Search() {
  return (
    <>
      <form className="max-w-md mx-auto rounded-full">
        <label
        
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative rounded-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-3"
            placeholder="Search..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-1.5  bg-zinc-800 font-medium rounded-full text-sm px-4 py-2  "
          >
             <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"

                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
