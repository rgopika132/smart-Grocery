import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import LocationCard from "../components/LocationCard";
import Banner from "../components/Banner";

function Home() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />
      <SearchBar />
      <LocationCard />
      <Banner />
    </div>
  );
}

export default Home;