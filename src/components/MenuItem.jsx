import React from "react";

const MenuItem = ({ meal, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <img
        src={meal.img}
        alt={meal.name}
        className="rounded-lg w-full h-40 object-cover"
      />
      <p className="mt-2 font-semibold">{meal.name}</p>
      <p className="text-gray-600 mb-2">Price: ${meal.price}</p>
      <button
        onClick={() => addToCart(meal)}
        className="mt-2 w-full bg-yellow-400 py-2 rounded font-medium hover:bg-yellow-500 transition"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default MenuItem;
