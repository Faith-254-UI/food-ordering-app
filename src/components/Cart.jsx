import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
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
            <h3 className="text-xl font-semibold">
              Total:{" "}
              <span className="text-yellow-500">${total.toFixed(2)}</span>
            </h3>

            <div className="flex justify-end gap-4 mt-4">
              {clearCart && (
                <button
                  onClick={clearCart}
                  className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
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
