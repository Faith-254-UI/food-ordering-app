import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, removeFromCart, clearCart, addToCart }) {
  const navigate = useNavigate();

  // ✅ Ensure item.price is numeric
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const grandTotal = subtotal + tax;

  return (
    <section className="p-8 bg-gray-50 rounded-2xl mt-12 max-w-3xl mx-auto shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || item.img || item.strMealThumb}
                    alt={item.name || item.strMeal}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/default-meal.jpg";
                    }}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">
                      {item.name || item.strMeal}
                    </p>
                    <p className="text-gray-500">
                      ${parseFloat(item.price).toFixed(2)} × {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          addToCart &&
                          addToCart({ ...item, quantity: 1 })
                        }
                        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right border-t pt-4">
            <h3 className="text-md text-gray-600">
              Subtotal: ${subtotal.toFixed(2)}
            </h3>
            <h3 className="text-md text-gray-600">
              Tax (8%): ${tax.toFixed(2)}
            </h3>
            <h3 className="text-xl font-semibold">
              Grand Total:{" "}
              <span className="text-yellow-500">${grandTotal.toFixed(2)}</span>
            </h3>

            <div className="flex justify-end gap-4 mt-4">
              {clearCart && (
                <button
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to empty the cart?")
                    ) {
                      clearCart();
                    }
                  }}
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
                >
                  Empty Cart
                </button>
              )}
              <button
                onClick={() => navigate("/checkout")}
                className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
