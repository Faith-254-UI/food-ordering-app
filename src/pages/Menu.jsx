import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";

function Menu({ addToCart }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meals:", err);
        setError("Failed to fetch meals 😞");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading meals...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-6">🍤 Seafood Menu</h2>
      <p className="text-gray-600 mb-8">
        Explore delicious meals fetched from TheMealDB API
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {meals.map((meal) => (
          <MenuItem
            key={meal.idMeal}
            meal={{
              id: meal.idMeal,
              name: meal.strMeal,
              img: meal.strMealThumb,
              price: (Math.random() * 10 + 10).toFixed(2),
            }}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
