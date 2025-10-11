import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow">
      <h1 className="font-bold text-lg">🍔 FOODIES APP</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-500">Home</Link>
        <Link to="/menu" className="hover:text-yellow-500">Menu</Link>
        <Link to="/cart" className="hover:text-yellow-500">Cart</Link>
        <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
