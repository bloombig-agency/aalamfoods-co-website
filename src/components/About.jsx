import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/0029.jpg"
                                alt="Preparation of Thokku"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <p className="font-serif italic text-gray-800">"Made in small batches with love, just like home."</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Our Story</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-secondary mt-2 mb-6">Where It Began</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                Aalam Co. was born from a simple desire: to bring the authentic, nostalgic flavors of South Indian kitchens to your table, without any compromises.
                            </p>
                            <p className="mb-4">
                                We believe that good food shouldn't be complicated. That's why every jar of our Thokku and Podi is made with clean ingredients, traditional spices, and absolutely no preservatives.
                            </p>
                            <p>
                                From selecting the freshest farm produce to slow-cooking our mixtures to perfection, we ensure that every spoonful tastes just like it was made by grandma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
