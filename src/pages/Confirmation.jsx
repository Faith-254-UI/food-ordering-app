import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-green-600">✅ Order Confirmed!</h2>
      <p className="text-gray-700 mb-6">
        Thank you for your purchase. Your order ID is <strong>#{orderId}</strong>.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-yellow-400 rounded-md font-medium hover:bg-yellow-500">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Confirmation;
