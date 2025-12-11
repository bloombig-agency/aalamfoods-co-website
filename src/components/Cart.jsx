import React, { useState } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const Cart = ({ onCheckout }) => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full transform transition-transform duration-500 ease-out animate-wiggle-soft">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-serif font-bold text-brand-secondary flex items-center">
              <ShoppingBag className="mr-2" size={20} /> Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-gray-400 hover:text-gray-500"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <ShoppingBag size={64} className="text-gray-200" />
                <p className="text-gray-500 text-lg">Your cart is empty.</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-brand-primary font-medium hover:underline"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        sizes="80px"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-brand-secondary">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {item.weight}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-50 text-gray-500"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-50 text-gray-500"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <p className="font-bold text-brand-secondary">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total</span>
                <span className="text-2xl font-bold text-brand-secondary">
                  ₹{cartTotal}
                </span>
              </div>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  onCheckout();
                }}
                className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-[#b35b30] transition-all transform hover:scale-[1.02] shadow-lg"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
