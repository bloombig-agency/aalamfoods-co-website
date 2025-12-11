import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
            {/* Hero Image */}
            <img
                src="/hero.png"
                alt="Aalam Foods"
                className="absolute top-0 left-0 w-full h-full object-cover saturate-[1.25]"
            />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 translate-y-12">
                <img src="/logo.png" alt="Aalam Co." className="w-60 md:w-80 lg:w-96 mb-8 drop-shadow-2xl" />
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                    Taste the Tradition of <br /> <span className="text-[#9C6133]">Aalam Foods Co.</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                    Authentic Thokku & Podi made with clean ingredients and zero preservatives.
                </p>
                <a
                    href="#shop"
                    className="bg-brand-primary text-white px-12 py-5 rounded-full font-bold text-2xl hover:bg-white hover:text-brand-primary transition-all duration-300 transform hover:scale-110 shadow-xl"
                >
                    Shop Now
                </a>
            </div>
        </div>
    );
};

export default Hero;
