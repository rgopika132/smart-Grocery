import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="px-5 mt-5">

      <div className="bg-white rounded-2xl shadow flex items-center px-4 py-3">

        <Search className="text-gray-400" size={20} />

        <input
          type="text"
          placeholder="Search groceries, fish, meat..."
          className="ml-3 flex-1 outline-none text-gray-700"
        />

      </div>

    </div>
  );
}

export default SearchBar;