import React from 'react';
import { ShoppingBag, Menu, X, Grid, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart, setIsCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed w-full bg-white z-50 border-b border-gray-100">
            <div className="w-full px-4 sm:px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">

                    {/* Left: Menu & Collections */}
                    <div className="flex-1 flex items-center gap-6">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex items-center gap-2 px-4 py-2 text-gray-700 transition-all duration-300 rounded-full hover:bg-brand-light hover:text-brand-primary hover:shadow-lg hover:scale-105 active:scale-95 border border-transparent hover:border-brand-light animate-wiggle-soft"
                        >
                            <Menu size={20} />
                            <span className="hidden md:inline font-medium text-sm uppercase tracking-wide">Menu</span>
                        </button>

                    </div>

                    {/* Center: Logo */}
                    <div className="flex-1 flex justify-center">
                        <span className="text-brand-primary font-bold text-2xl font-serif">Aalam Foods Co.</span>
                    </div>

                    {/* Right: Cart */}
                    <div className="flex-1 flex justify-end items-center gap-6">
                        <a
                            href="#shop"
                            className="group hidden md:flex items-center gap-0 hover:gap-2 px-3 py-3 text-gray-700 transition-all duration-300 rounded-full hover:bg-brand-light hover:text-brand-primary hover:shadow-lg hover:scale-105 active:scale-95 border border-transparent hover:border-brand-light animate-wiggle-soft"
                        >
                            <Grid size={20} />
                            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 font-medium text-sm uppercase tracking-wide whitespace-nowrap">
                                Collections
                            </span>
                        </a>
                        <a
                            href="#about"
                            className="group hidden md:flex items-center gap-0 hover:gap-2 px-3 py-3 text-gray-700 transition-all duration-300 rounded-full hover:bg-brand-light hover:text-brand-primary hover:shadow-lg hover:scale-105 active:scale-95 border border-transparent hover:border-brand-light animate-wiggle-soft"
                        >
                            <BookOpen size={20} />
                            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 font-medium text-sm uppercase tracking-wide whitespace-nowrap">
                                Our Story
                            </span>
                        </a>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="group relative flex items-center gap-0 hover:gap-2 px-3 py-3 text-gray-700 transition-all duration-300 rounded-full hover:bg-brand-light hover:text-brand-primary hover:shadow-lg hover:scale-105 active:scale-95 border border-transparent hover:border-brand-light animate-wiggle-soft"
                        >
                            <ShoppingBag size={24} />
                            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 text-sm font-medium uppercase tracking-wide">
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

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">Shop</a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50">Our Story</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
