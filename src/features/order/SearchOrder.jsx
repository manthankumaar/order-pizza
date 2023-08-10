import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Order #"
          className="w-28 rounded-full bg-yellow-200 px-4 py-1 text-sm transition-all duration-300 placeholder:text-center placeholder:text-stone-400 focus:w-32 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 focus:ring-offset-0 sm:w-64 sm:focus:w-72"
        />
      </form>
    </div>
  );
};

export default SearchOrder;
