import React from "react";

function Home() {
  return (
    <div className="px-8 py-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">
            Order Delicious Food Anytime 🍕
          </h2>
          <p className="text-gray-600 mb-6">
            Fresh meals delivered in minutes
          </p>
          <button className="px-6 py-3 bg-gray-300 rounded-md font-medium hover:bg-gray-400">
            Order Now
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80"
          alt="Burger and fries"
          className="rounded-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Categories */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold">Explore Categories 🍴</h3>
        <p className="text-gray-500 mb-8">Choose from a variety of meals</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1601924582971-df6b3f5f1a6a?auto=format&fit=crop&w=800&q=80"
              alt="Pizza"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Pizza</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
              alt="Burger"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Burger</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&w=800&q=80"
              alt="Drinks"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Drinks</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Desserts"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Desserts</p>
          </div>
        </div>
      </div>

      {/* Popular Meals */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold">Popular Meals</h3>
        <p className="text-gray-500 mb-8">
          Our best-selling dishes, loved by customers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "Pizza Margherita",
              price: "$9.99",
              img: "https://images.unsplash.com/photo-1601924575475-4c20eab1b0c3?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Classic Beef Burger",
              price: "$12.49",
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Spaghetti Bolognese",
              price: "$11.99",
              img: "https://images.unsplash.com/photo-1589308078055-29d12a5c7f1b?auto=format&fit=crop&w=800&q=80",
            },
            {
              name: "Grilled Chicken Salad",
              price: "$10.49",
              img: "https://images.unsplash.com/photo-1604908177070-33e1e5a1c17c?auto=format&fit=crop&w=800&q=80",
            },
          ].map((meal, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm bg-white">
              <img
                src={meal.img}
                alt={meal.name}
                className="rounded-lg w-full h-40 object-cover"
              />
              <p className="mt-2 font-medium">{meal.name}</p>
              <p className="text-gray-600">Price: {meal.price}</p>
              <button className="mt-3 w-full bg-yellow-400 py-2 rounded hover:bg-yellow-500">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold">What Our Customers Say</h3>
        <p className="text-gray-500 mb-8">
          Real feedback from our happy customers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              stars: "⭐⭐⭐⭐⭐",
              title: "Best Burger Ever!",
              body:
                "The burger was juicy and full of flavor. Delivery came right on time.",
              reviewer: "Sarah L.",
              date: "Aug 2025",
            },
            {
              stars: "⭐⭐⭐⭐",
              title: "Tasty Pizza",
              body: "Loved the crust and toppings. Could use a little more cheese, though.",
              reviewer: "Daniel K.",
              date: "Jul 2025",
            },
            {
              stars: "⭐⭐⭐⭐⭐",
              title: "Excellent Service",
              body:
                "Fresh ingredients, quick delivery, and super friendly service!",
              reviewer: "Amina Y.",
              date: "Sep 2025",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="border rounded-xl bg-white shadow-sm p-6 text-left"
            >
              <p className="text-yellow-500 mb-2">{review.stars}</p>
              <p className="font-semibold mb-1">Review Title: {review.title}</p>
              <p className="text-sm text-gray-600 mb-2">
                Review Body: “{review.body}”
              </p>
              <p className="text-sm text-gray-500">
                Reviewer: {review.reviewer}
              </p>
              <p className="text-sm text-gray-500">Date: {review.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
