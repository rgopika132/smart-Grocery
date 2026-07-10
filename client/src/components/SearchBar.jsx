import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="px-5 mt-5">
      <div className="flex items-center bg-white rounded-xl shadow px-4 py-3">
        <Search className="text-gray-400" />

        <input
          type="text"
          placeholder="Search groceries..."
          className="ml-3 w-full outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;