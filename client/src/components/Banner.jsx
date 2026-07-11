function Banner() {
  return (
    <div className="mx-5 mt-6 rounded-3xl bg-gradient-to-r from-green-700 to-green-500 text-white p-8">

      <h2 className="text-3xl font-bold">
        Fresh Groceries
      </h2>

      <p className="mt-3 text-green-100">
        Vegetables, Fish, Meat & Daily Essentials delivered to your doorstep.
      </p>

      <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Shop Now
      </button>

    </div>
  );
}

export default Banner;