import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-8">
        Checkout
      </h1>

      {/* Customer Details */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Delivery Address
          </label>

          <textarea
            rows="4"
            placeholder="House No, Street, Area..."
            className="w-full border rounded-xl p-3"
          />
        </div>

        <div className="mb-5">
          <label className="block font-semibold mb-2">
            Landmark (Optional)
          </label>

          <input
            type="text"
            placeholder="Nearby landmark"
            className="w-full border rounded-xl p-3"
          />
        </div>

      </div>

      {/* Bill Summary */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

        <h2 className="text-2xl font-bold mb-5">
          🧾 Bill Summary
        </h2>

        <div className="flex justify-between mb-3">
          <span>Items Total</span>
          <span>₹ {totalAmount}</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Delivery</span>
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

        <hr className="my-4" />

        <div className="flex justify-between text-xl font-bold">
          <span>Payable Amount</span>
          <span>₹ {totalAmount}</span>
        </div>

      </div>

      {/* Payment Method */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">

        <h2 className="text-2xl font-bold mb-5">
          Payment Method
        </h2>

        <label className="flex items-center gap-3 mb-3">
          <input
            type="radio"
            name="payment"
            defaultChecked
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            disabled
          />
          UPI (Coming Soon)
        </label>

      </div>

      {/* Place Order Button */}

      <button
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-semibold"
      >
        Place Order
      </button>

    </div>
  );
}