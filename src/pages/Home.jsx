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
          src="https://images.unsplash.com/photo-1606755962773-d324e0b3f23c"
          alt="Burger and fries"
          className="rounded-lg w-full max-w-md"
        />
      </div>

      {/* Categories */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold">Explore Categories 🍴</h3>
        <p className="text-gray-500 mb-8">Choose from a variety of meals</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1601924582971-df6b3f5f1a6a"
              alt="Pizza"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Pizza</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349"
              alt="Burger"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Burger</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="Drinks"
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 font-medium">Drinks</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
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
              img: "https://images.unsplash.com/photo-1601924575475-4c20eab1b0c3",
            },
            {
              name: "Classic Beef Burger",
              price: "$12.49",
              img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
            },
            {
              name: "Spaghetti Bolognese",
              price: "$11.99",
              img: "https://images.unsplash.com/photo-1589308078055-29d12a5c7f1b",
            },
            {
              name: "Grilled Chicken Salad",
              price: "$10.49",
              img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            },
          ].map((meal, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm">
              <img
                src={meal.img}
                alt={meal.name}
                className="rounded-lg w-full h-40 object-cover"
              />
              <p className="mt-2 font-medium">{meal.name}</p>
              <p className="text-gray-600">Price: {meal.price}</p>
              <button className="mt-3 w-full bg-gray-300 py-2 rounded hover:bg-gray-400">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
