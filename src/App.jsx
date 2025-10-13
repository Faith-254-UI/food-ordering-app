import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
import Checkout from "./pages/Checkout";
import Menu from "./pages/Menu";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart items from localStorage on app start
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCart);
  }, []);

  // ✅ Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ Add item to cart
  const addToCart = (meal) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === meal.name);
      if (existing) {
        return prev.map((item) =>
          item.name === meal.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...meal, id: Date.now(), quantity: 1 }];
    });
  };

  // ✅ Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800">
        <Navbar cartCount={cartItems.length} />

        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
