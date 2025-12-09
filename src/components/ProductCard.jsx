import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

    const handleAddToCart = () => {
        // Create a specific item object including the selected variant choice
        const itemToAdd = {
            id: `${product.id}-${selectedVariant.weight}`, // Unique ID for cart
            name: product.name,
            type: product.type,
            image: product.image,
            price: selectedVariant.price,
            weight: selectedVariant.weight
        };
        addToCart(itemToAdd);
    };

    return (
        <div
            className="group relative bg-[#fdfaf5] rounded-none sm:rounded-sm border border-transparent hover:border-gray-100 transition-all duration-300 p-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="aspect-square relative overflow-hidden mb-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={product.hoverImage}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Sale badge or tag could go here */}
            </div>

            <div className="flex flex-col items-start gap-2">
                <span className="text-xs tracking-widest text-[#6B5E57] uppercase">AALAM FOODS</span>
                <h3 className="text-lg font-serif text-[#1c1917] font-medium leading-tight">{product.name}</h3>

                <div className="text-base text-[#1c1917] mb-2">
                    From <span className="font-semibold">₹{product.variants[0].price}.00</span>
                </div>

                {/* Variant Selectors */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {product.variants.map((variant) => (
                        <button
                            key={variant.weight}
                            onClick={() => setSelectedVariant(variant)}
                            className={`px-4 py-2 text-sm border transition-colors duration-200 ${selectedVariant.weight === variant.weight
                                    ? 'bg-[#1c1917] text-white border-[#1c1917]'
                                    : 'bg-white text-[#1c1917] border-gray-200 hover:border-gray-400'
                                } rounded-md`}
                        >
                            {variant.weight}
                        </button>
                    ))}
                </div>

                {/* Add to Cart Button */}
                <button
                    onClick={handleAddToCart}
                    className="w-full py-3 border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white transition-colors duration-300 uppercase tracking-wider text-sm font-medium rounded-md"
                >
                    Quick Add - ₹{selectedVariant.price}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
