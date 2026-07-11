import { Bell, Menu, ShoppingCart } from "lucide-react";
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
    <nav className="flex items-center justify-between bg-white shadow-sm px-5 py-3">

      <div className="flex items-center gap-3">

        <Menu size={25} />

        <img
          src={appConfig.logo}
          alt="logo"
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h1 className="font-bold text-xl">
            {appConfig.appName}
          </h1>

          <p className="text-gray-500 text-sm">
            Fresh Groceries
          </p>

        </div>

      </div>

      <div className="flex items-center gap-4">

  <Bell size={23} />

  <div
  className="relative cursor-pointer"
  onClick={() => navigate("/cart")}
>

    <ShoppingCart size={25} />

    {totalItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {totalItems}
      </span>
    )}

  </div>

</div>
    </nav>
  );
}

export default Navbar;