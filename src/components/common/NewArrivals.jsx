import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'; // Import Shadcn Card components

const NewArrivals = () => {
  const newProducts = [
    {
      id: 'prod-001',
      name: 'Precision Machined Parts',
      description: 'High-quality components for industrial applications.',
      price: '₹1,250', // Example price in INR
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Machined+Parts', // Placeholder image
    },
    {
      id: 'prod-002',
      name: 'Circuit Boards',
      description: 'Advanced electronics for automation systems.',
      price: '₹8,500', // Example price in INR
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Circuit+Boards', // Placeholder image
    },
    {
      id: 'prod-003',
      name: 'Industrial Tools',
      description: 'Professional grade tools for manufacturing units.',
      price: '₹22,000', // Example price in INR
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Industrial+Tools', // Placeholder image
    },
    {
      id: 'prod-004',
      name: 'Packaging Materials',
      description: 'Sustainable and durable packaging solutions.',
      price: '₹3,500', // Example price in INR
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Packaging', // Placeholder image
    },
    // Add more products as needed, matching the image or your data
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover object-center"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Error'; }} // Fallback
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-gray-800">{product.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-xl font-bold text-blue-600">{product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
