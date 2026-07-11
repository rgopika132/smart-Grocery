import ProductCard from "./ProductCard";
import products from "../data/products";

function PopularProducts() {
  return (
    <section className="mx-5 mt-10">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          Popular Products
        </h2>

        <button className="text-green-600 font-semibold">
          View All
        </button>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default PopularProducts;