import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-brand-light">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h3 className="text-3xl font-serif font-bold tracking-tight">
              Aalam Co.
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Authentic South Indian flavors crafted in small batches with clean
              ingredients and zero shortcuts.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Shop</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Thokku Collection
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Podi Collection
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  Gift Boxes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Learn</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Customer Love
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">
                  How to Serve
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bulk orders, partnerships, or custom gifting? We would love to
              hear from you.
            </p>
            <a
              href="mailto:aalamfoodsco@gmail.com"
              className="inline-block text-sm font-semibold text-white bg-[#C86B3C] px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-[#b35b30] transition-all duration-200"
            >
              aalamfoodsco@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} Aalam Co. Crafted with care.
          </span>
          <span className="text-gray-500">Chennai, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
