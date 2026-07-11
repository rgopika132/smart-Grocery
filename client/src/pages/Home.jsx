import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import LocationCard from "../components/LocationCard";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <SearchBar />

      <LocationCard />

      <Banner />

      <Categories />

      <PopularProducts />

    </div>
  );
}

export default Home;