import { Bell, Menu } from "lucide-react";
import appConfig from "../config/appConfig";

function Navbar() {
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

      <Bell size={23} />

    </nav>
  );
}

export default Navbar;