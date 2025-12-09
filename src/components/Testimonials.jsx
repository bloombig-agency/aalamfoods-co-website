import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Priya S.",
        text: "The Tomato Garlic Thokku is an absolute lifesaver for busy mornings. Tastes exactly like my mom's!",
        rating: 4
    },
    {
        id: 2,
        name: "Rahul M.",
        text: "Crunchy, flavorful, and so fresh. The Peanut Podi is now a staple in my pantry.",
        rating: 5
    },
    {
        id: 3,
        name: "Anitha K.",
        text: "Finally, a brand that doesn't use preservatives. I can taste the quality in every bite.",
        rating: 4
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Testimonials</span>
                <h2 className="text-4xl font-serif font-bold text-brand-secondary mt-2 mb-12">Trusted by Community</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left">
                            <div className="flex mb-4 text-yellow-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                            <p className="font-bold text-brand-secondary">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
