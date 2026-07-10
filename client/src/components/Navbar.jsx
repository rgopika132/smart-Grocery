import { Bell, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-5 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <Menu size={26} className="cursor-pointer" />
        <h1 className="text-2xl font-bold text-green-700">
          Curry Vekkan
        </h1>
      </div>

      <Bell size={24} className="cursor-pointer" />
    </nav>
  );
}

export default Navbar;