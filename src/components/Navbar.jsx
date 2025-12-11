import React from "react";
import { ShoppingBag, Menu, X, Grid, BookOpen } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = ({ setSelectedCategory }) => {
  const { cart, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCategoryClick = (category) => {
    if (setSelectedCategory) setSelectedCategory(category);
    setIsMenuOpen(false);
    const shopSection = document.getElementById("shop");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Left: Menu & Collections */}
            <div className="flex-1 flex items-center gap-6">
              <button
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                type="button"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-brand-primary hover:text-[#b35b30] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md"
              >
                <Menu size={20} />
                <span className="hidden md:inline text-sm uppercase tracking-wide">
                  Menu
                </span>
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex-1 flex justify-center">
              <img
                src="/text-logo.png"
                alt="Aalam Foods Co."
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-14 md:h-16 w-auto"
              />
            </div>

            {/* Right: Cart */}
            <div className="flex-1 flex justify-end items-center gap-6">
              <a
                href="#shop"
                className="group relative hidden md:flex items-center justify-center p-3 text-brand-primary hover:text-[#b35b30] transition-colors"
              >
                <Grid size={24} />
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Our Collection
                </span>
              </a>
              <a
                href="#about"
                className="group relative hidden md:flex items-center justify-center p-3 text-brand-primary hover:text-[#b35b30] transition-colors"
              >
                <BookOpen size={24} />
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Our Story
                </span>
              </a>
              <button
                onClick={() => setIsCartOpen(true)}
                type="button"
                className="group relative flex items-center justify-center p-3 text-brand-primary hover:text-[#b35b30] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-md"
              >
                <ShoppingBag size={24} />
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Cart
                </span>
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-primary rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Slide-over Panel (Left Side) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] overflow-hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl flex flex-col h-full animate-wiggle-soft-left">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-xl font-serif font-bold text-gray-800">
                Categories
              </h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <button
                onClick={() => handleCategoryClick("thokku")}
                className="text-left text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
              >
                Thokku
              </button>
              <button
                onClick={() => handleCategoryClick("podi")}
                className="text-left text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors py-2 border-b border-gray-50"
              >
                Podi
              </button>
              <button
                onClick={() => handleCategoryClick("crunch")}
                className="text-left text-lg font-medium text-gray-700 hover:text-brand-primary transition-colors py-2 border-b border-gray-50 flex items-center justify-between"
              >
                Crunch
                <span className="text-xs bg-brand-light text-brand-primary px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                  New
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
