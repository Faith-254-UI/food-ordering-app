import { Link } from "react-router-dom";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md sticky top-0 z-50">
      <h1 className="font-bold text-lg text-yellow-600">🍔 FOODIES APP</h1>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-yellow-500">Home</Link>
        <Link to="/menu" className="hover:text-yellow-500">Menu</Link>
        <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
        <Link to="/cart" className="relative hover:text-yellow-500">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-yellow-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
