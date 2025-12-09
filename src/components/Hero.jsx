import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Hero Image */}
            <img
                src="/hero.png"
                alt="Aalam Foods"
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                    Taste the Tradition of <br /> <span className="text-brand-primary">Aalam Co.</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                    Authentic Thokku & Podi made with clean ingredients and zero preservatives.
                </p>
                <a
                    href="#shop"
                    className="bg-brand-primary text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white hover:text-brand-primary transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Hero;
