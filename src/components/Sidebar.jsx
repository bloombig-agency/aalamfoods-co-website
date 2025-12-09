import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const Sidebar = ({
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    sortBy,
    setSortBy
}) => {
    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'thokku', label: 'Thokku' },
        { id: 'podi', label: 'Podi' },
        { id: 'crunch', label: 'Crunch' },
    ];

    return (
        /* Increased width to w-72 (18rem) or w-80 (20rem) for better presence */
        <div className="w-full lg:w-80 flex-shrink-0 bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-fit sticky top-24">
            <div className="mb-10">
                <h3 className="font-serif font-bold text-xl mb-6 flex items-center gap-2 text-brand-secondary">
                    <SlidersHorizontal size={22} /> Categories
                </h3>
                <div className="space-y-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex items-center justify-between w-full text-left px-5 py-3 rounded-lg transition-all duration-200 text-base ${selectedCategory === cat.id
                                    ? 'bg-brand-primary text-white font-medium shadow-md transform scale-[1.02]'
                                    : 'text-gray-600 hover:bg-gray-50 hover:pl-6'
                                }`}
                        >
                            {cat.label}
                            {cat.id === 'crunch' && (
                                <span className="ml-2 text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">New</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-10">
                <h3 className="font-serif font-bold text-xl mb-4 text-brand-secondary">Sort By</h3>
                <div className="relative">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-brand-primary outline-none appearance-none cursor-pointer hover:border-gray-300 transition-colors"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                    {/* Custom Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-serif font-bold text-xl text-brand-secondary">
                        Price Range
                    </h3>
                    <span className="text-brand-primary font-bold">₹0 - ₹{priceRange[1]}</span>
                </div>

                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary hover:accent-[#b03a0b]"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                    <span>Min</span>
                    <span>Max</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
