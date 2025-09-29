function Navbar() {
  return (
    <nav className="bg-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold flex items-center gap-2">
        🍔 FOODIES APP
      </h1>
      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-yellow-600">HOME</li>
        <li className="cursor-pointer hover:text-yellow-600">MENU</li>
        <li className="cursor-pointer hover:text-yellow-600">CONTACT</li>
        <li className="cursor-pointer hover:text-yellow-600">LOGIN</li>
      </ul>
    </nav>
  );
}

export default Navbar;
