import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gray-100 shadow">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Title */}
        <h1 className="font-bold text-lg flex items-center gap-2 mb-4 md:mb-0">
          🍔 FOODIES APP
        </h1>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link to="/menu" className="hover:text-yellow-500 transition">
            Menu
          </Link>
          <Link to="/cart" className="hover:text-yellow-500 transition">
            Cart
          </Link>
          <Link to="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
