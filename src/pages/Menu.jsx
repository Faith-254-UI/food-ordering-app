import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";

function Menu({ addToCart }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("Seafood");

  useEffect(() => {
    setLoading(true);
    const isDrink = category === "Drinks";
    const url = isDrink
      ? "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const rawItems = isDrink ? data.drinks : data.meals;
        const mappedItems = rawItems?.map((item) => ({
          id: item.idDrink || item.idMeal,
          name: item.strDrink || item.strMeal,
          img: item.strDrinkThumb || item.strMealThumb,
          price: (Math.random() * 10 + 10).toFixed(2),
        })) || [];
        setItems(mappedItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setError("Failed to fetch items 😞");
        setLoading(false);
      });
  }, [category]);

  const categories = ["Seafood", "Beef", "Chicken", "Dessert", "Drinks"];

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">
        {category === "Drinks" ? "🍹 Drinks Menu" : `🍽️ ${category} Menu`}
      </h2>
      <p className="text-gray-600 mb-6">
        Explore delicious {category === "Drinks" ? "beverages" : "meals"} fetched from {category === "Drinks" ? "TheCocktailDB" : "TheMealDB"} API
      </p>

      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              category === cat
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading/Error States */}
      {loading && <p className="text-center py-10">Loading {category.toLowerCase()}...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Items Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <MenuItem key={item.id} meal={item} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;
