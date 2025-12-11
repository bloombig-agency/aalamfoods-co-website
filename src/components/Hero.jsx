import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center">
      {/* Hero Image */}
      <img
        src="/hero.png"
        alt="Aalam Foods"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover saturate-[1.15]"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
        <img
          src="/logo.png"
          alt="Aalam Co."
          loading="lazy"
          decoding="async"
          className="w-44 sm:w-56 md:w-72 lg:w-80 mx-auto mb-8 drop-shadow-2xl"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
          Taste the Tradition of <br />
          <span className="text-[#C86B3C]">Aalam Foods Co.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 drop-shadow-md max-w-3xl mx-auto">
          Authentic Thokku & Podi made with clean ingredients and zero
          preservatives.
        </p>
        <a
          href="#shop"
          className="inline-block bg-brand-primary text-white px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-5 rounded-full font-semibold sm:font-bold text-lg sm:text-xl md:text-2xl hover:bg-white hover:text-brand-primary transition-all duration-300 transform hover:scale-[1.03] shadow-xl"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
