// CartSidebar.jsx
import { useState } from "react";
import { useCart } from "../contexts/Cart";
import { MinusIcon, PlusIcon, X } from "lucide-react";
import Loader from "../components/Loader";

import axios from "axios";
import { toast } from "react-toastify";
import OrderDetailsForm from "./OrderDetailsForm";

export default function CartSidebar({ isOpen, onClose }) {
  const {
    cart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    emptyCart,
  } = useCart();

  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderPlaced = async (details) => {
    setIsPlacingOrder(true);
    try {
      const res = await axios.post(
        "https://the-brown-butter-cafe.onrender.com/api/orders",
        {
          items: cart,
          createdAt: new Date(),
          name: details.name,
          phone: details.phone,
        }
      );
      console.log("Order placed successfully: ", res.data);
      toast.success("Order placed successfully!");
      emptyCart();
      setShowDetailsForm(false);
    } catch (err) {
      console.error("Error placing order: ", err);
      toast.error("Failed to place order");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <>
      {/* Full Page Loader Overlay */}
      {isPlacingOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4 shadow-2xl">
            <Loader color="hsl(25 35% 43%)" size={15} loading={true} />
            <span className="text-lg font-semibold text-gray-800">
              Placing your order...
            </span>
          </div>
        </div>
      )}

      {/* Order Details Form Modal */}
      {showDetailsForm && (
        <OrderDetailsForm
          onSubmit={(details) => handleOrderPlaced(details)}
          onCancel={() => setShowDetailsForm(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full lg:w-120 sm:w-[60vw]  cart-side-container shadow-2xl 
            transform transition-transform duration-300 z-50
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full cursor-pointer cart-sidebar-close"
          >
            <X />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-2 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b border-opacity-30 gap-2"
              >
                {/* Item info, fixed width, no wrap */}
                <div className="flex flex-col min-w-[160px] max-w-[160px]">
                  <span className="font-semibold text-lg leading-tight truncate whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-sm opacity-80">₹{item.price}</span>
                </div>
                {/* Quantity controls, always centered */}
                <div className="flex items-center gap-3 flex-shrink-0 min-w-[120px] justify-center">
                  <button
                    className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-cafe-dark transition-colors"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <MinusIcon />
                  </button>
                  <span className="font-semibold text-lg w-8 text-center select-none">
                    {item.quantity}
                  </span>
                  <button
                    className="p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-cafe-dark transition-colors"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <PlusIcon />
                  </button>
                </div>
                {/* Price and Remove, fixed width, right aligned */}
                <div className="flex flex-col items-end min-w-[80px] max-w-[80px]">
                  <span className="font-semibold text-lg">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    className="text-red-500 font-semibold mt-1 hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total</span>
              <span className="text-lg font-bold">₹{totalPrice}</span>
            </div>
            <button
              className="w-full add-to-cart-btn py-3 rounded-lg transition"
              onClick={() => setShowDetailsForm(true)}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}
