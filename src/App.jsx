import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import Sidebar from './components/Sidebar';
import { products } from './data/products';
import { Search } from 'lucide-react';

function App() {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    // Shop State
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState('featured');

    // Filter Logic
    const filteredProducts = useMemo(() => {
        if (selectedCategory === 'crunch') return [];

        let result = [...products];

        // Filter by Category
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.type === selectedCategory);
        }

        // Filter by Price
        result = result.filter(p =>
            p.variants.some(v => v.price <= priceRange[1])
        );

        // Sort
        if (sortBy === 'price-asc') {
            result.sort((a, b) => a.variants[0].price - b.variants[0].price);
        } else if (sortBy === 'price-desc') {
            result.sort((a, b) => b.variants[0].price - a.variants[0].price);
        } else if (sortBy === 'name-asc') {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'name-desc') {
            result.sort((a, b) => b.name.localeCompare(a.name));
        }

        return result;
    }, [selectedCategory, priceRange, sortBy]);

    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-50 font-sans text-[#1c1917]">
                <Navbar />
                <Hero />

                {/* Main Shop Section */}
                {/* Expanded width to 95% or max-w-[1800px] */}
                <section id="shop" className="py-20 w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Sidebar */}
                        <Sidebar
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        {/* Product Grid */}
                        <div className="flex-1 w-full">
                            <div className="mb-8 border-b border-gray-100 pb-4">
                                <h2 className="text-4xl font-serif font-bold text-brand-secondary capitalize tracking-tight">
                                    {selectedCategory === 'all' ? 'Our Collection' : `${selectedCategory} Collection`}
                                </h2>
                                <p className="text-gray-500 mt-2 text-lg">
                                    Showing {filteredProducts.length} results
                                </p>
                            </div>

                            {selectedCategory === 'crunch' ? (
                                <div className="bg-white rounded-xl p-24 text-center shadow-sm border border-gray-100">
                                    <div className="inline-block p-6 bg-brand-light rounded-full mb-6 animate-pulse">
                                        <Search className="w-16 h-16 text-brand-primary" />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Coming Soon!</h3>
                                    <p className="text-gray-500 max-w-lg mx-auto text-lg leading-relaxed">
                                        We are crafting something crunchy and delicious. Stay tuned for our new addition to the Aalam family.
                                    </p>
                                </div>
                            ) : filteredProducts.length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                    <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory('all');
                                            setPriceRange([0, 1000]);
                                        }}
                                        className="mt-6 text-brand-primary font-medium hover:underline text-lg"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            ) : (
                                /* Adjusted Grid for wider layout */
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                    {filteredProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <About />
                <Testimonials />
                <Footer />

                {/* Cart & Checkout */}
                <Cart onCheckout={() => setIsCheckoutOpen(true)} />
                <CheckoutModal
                    isOpen={isCheckoutOpen}
                    onClose={() => setIsCheckoutOpen(false)}
                />
            </div>
        </CartProvider>
    );
}

export default App;
