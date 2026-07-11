import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const {
  cartItems,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();

  const cartItem = cartItems.find((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 p-4">

      <img
        src={product.image}
        alt={product.name}
        className="w-36 h-36 object-contain mx-auto"
      />

      <h3 className="mt-4 font-semibold">
        {product.name}
      </h3>

      <p className="text-green-700 font-bold text-lg">
        ₹ {product.price}
      </p>

      {!cartItem ? (
  <button
    onClick={() => addToCart(product)}
    className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
  >
    Add
  </button>
) : (
  <div className="mt-4 flex items-center justify-between bg-green-50 rounded-xl p-2">

    <button
      onClick={() => decreaseQuantity(product.id)}
      className="w-10 h-10 bg-red-500 text-white rounded-lg text-xl"
    >
      -
    </button>

    <span className="font-bold text-lg">
      {cartItem.quantity}
    </span>

    <button
      onClick={() => increaseQuantity(product.id)}
      className="w-10 h-10 bg-green-600 text-white rounded-lg text-xl"
    >
      +
    </button>

  </div>
)}

    </div>
  );
}