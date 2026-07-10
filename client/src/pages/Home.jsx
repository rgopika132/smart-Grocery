import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <SearchBar />
    </div>
  );
}

export default Home;