import React from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart, setIsCartOpen } = useCart();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <img src="/aalam logo.png" alt="Aalam Co Logo" className="h-10 w-auto" />
                        <span className="font-serif text-2xl text-brand-primary font-bold tracking-tight">Aalam Co.</span>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#shop" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">Shop</a>
                        <a href="#about" className="text-gray-700 hover:text-brand-primary transition-colors font-medium">Our Story</a>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-gray-700 hover:text-brand-primary transition-all hover:scale-105"
                        >
                            <ShoppingBag size={24} />
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-primary rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 mr-4 text-gray-700"
                        >
                            <ShoppingBag size={24} />
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-primary rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
