import React from 'react';
import { Card, CardContent } from '../ui/card'; // Import Shadcn Card components

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "ZeeroStock has been instrumental in helping us liquidate our excess inventory efficiently. A truly transparent and trustworthy marketplace!",
      author: "Priya Sharma",
      title: "CEO, InnovateTech Solutions India",
      avatarUrl: "https://placehold.co/60x60/AEC6CF/FFFFFF?text=PS", // Placeholder for avatar
    },
    {
      id: 2,
      quote: "We found exactly what we needed at competitive prices. Highly recommended for any business looking for quality excess materials.",
      author: "Rahul Verma",
      title: "Procurement Head, Bharat Manufacturing Co.",
      avatarUrl: "https://placehold.co/60x60/98FF98/FFFFFF?text=RV", // Placeholder for avatar
    },
    {
      id: 3,
      quote: "The platform transformed our inventory management. Discovering new buyers has never been easier.",
      author: "Anjali Singh",
      title: "Operations Director, Shakti Industries",
      avatarUrl: "https://placehold.co/60x60/FFD700/FFFFFF?text=AS", // Placeholder for avatar
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/60x60/cccccc/000000?text=Avatar'; }} // Fallback
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
