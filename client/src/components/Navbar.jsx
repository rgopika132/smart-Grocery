import { Menu, ShoppingCart } from "lucide-react";
import appConfig from "../config/appConfig";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-sm px-5 py-4 flex justify-between items-center sticky top-0 z-50">

      <div className="flex items-center gap-3">
        <Menu className="cursor-pointer" size={24} />

        <img
          src={appConfig.logo}
          alt="Logo"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h1 className="text-xl font-bold">
            {appConfig.appName}
          </h1>

          <p className="text-sm text-gray-500">
            Fresh Groceries
          </p>
        </div>
      </div>

      <div
        onClick={() => navigate("/cart")}
        className="relative cursor-pointer"
      >
        <ShoppingCart size={28} />

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </div>

    </nav>
  );
}

export default Navbar;