import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    // Optional: clearCart(); — pass this as a prop if needed
    navigate("/confirmation");
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      <p className="text-gray-600 mb-6">
        Review your order and confirm to complete your purchase.
      </p>
      <button
        onClick={handleConfirmOrder}
        className="px-6 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition"
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Checkout;
