import { useCart } from "../context/CartContext";
import storeConfig from "../config/storeConfig";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const eligibleForCheckout =
    totalAmount >= storeConfig.minimumOrder;

  const amountRemaining =
    storeConfig.minimumOrder - totalAmount;

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">
          Your Cart is Empty 🛒
        </h1>

        <p className="text-gray-500 mt-3">
          Add some groceries to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow p-4 mb-4 flex items-center justify-between"
        >
          <div>
            <h2 className="font-semibold text-lg">
              {item.name}
            </h2>

            <p className="text-gray-600">
              ₹ {item.price}
            </p>

            <p className="text-green-700 font-bold">
              Subtotal ₹ {item.price * item.quantity}
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => decreaseQuantity(item.id)}
              className="bg-red-500 text-white w-10 h-10 rounded-lg"
            >
              -
            </button>

            <span className="font-bold text-lg">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="bg-green-600 text-white w-10 h-10 rounded-lg"
            >
              +
            </button>

          </div>
        </div>
      ))}

      {/* Bill Summary */}

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          🧾 Bill Summary
        </h2>

        <div className="flex justify-between mb-3">
          <span>Items Total</span>
          <span>₹ {totalAmount}</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Delivery Fee</span>
          <span className="text-green-600 font-semibold">
            FREE
          </span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Packing Charges</span>
          <span className="text-green-600 font-semibold">
            FREE
          </span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Minimum Order</span>
          <span>₹ {storeConfig.minimumOrder}</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-xl font-bold">
          <span>Payable Amount</span>
          <span>₹ {totalAmount}</span>
        </div>

        {eligibleForCheckout ? (
          <p className="text-green-600 mt-4 font-semibold">
            🎉 Congratulations! You are eligible for FREE delivery.
          </p>
        ) : (
          <p className="text-red-500 mt-4">
            Add ₹{amountRemaining} more to place your order.
          </p>
        )}

        <button
          disabled={!eligibleForCheckout}
          className={`mt-6 w-full py-3 rounded-xl font-semibold ${
            eligibleForCheckout
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}