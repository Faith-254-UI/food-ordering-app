import React from "react";

const MenuItem = ({ meal, addToCart }) => {
  // Ensure consistent meal object structure
  const handleAddToCart = () => {
    const cartItem = {
      id: meal.id || meal.idMeal, // supports API meals or static meals
      name: meal.name || meal.strMeal,
      image: meal.img || meal.image || meal.strMealThumb,
      price: parseFloat(meal.price) || (Math.random() * 10 + 10).toFixed(2), // fallback price
      quantity: 1,
    };
    addToCart(cartItem);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white">
      <img
        src={meal.img || meal.image || meal.strMealThumb}
        alt={meal.name || meal.strMeal}
        className="rounded-lg w-full h-40 object-cover"
      />
      <p className="mt-2 font-semibold">{meal.name || meal.strMeal}</p>
      <p className="text-gray-600 mb-2">
        Price: ${parseFloat(meal.price || (Math.random() * 10 + 10)).toFixed(2)}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-2 w-full bg-yellow-400 py-2 rounded font-medium hover:bg-yellow-500 transition"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default MenuItem;
