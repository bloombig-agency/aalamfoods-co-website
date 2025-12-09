import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-secondary text-brand-light py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">Aalam Co.</h3>
                        <p className="text-gray-400">Authentic South Indian flavors, made with love and clean ingredients.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Combos</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Thokku Collection</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Podi Collection</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">The Complete Box</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <p className="text-gray-400">For bulk orders & inquiries:</p>
                        <p className="text-brand-light font-medium mt-1">nitish5082006@gmail.com</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Aalam Co. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
