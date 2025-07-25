import React from 'react';
import { Card, CardContent } from '../../components/ui/card'; // Import Shadcn Card components

const FeaturedCategories = () => {
  const categories = [
    {
      name: 'Raw Materials',
      description: 'Steel, aluminum, plastics, and more',
      imageUrl: 'https://placehold.co/400x250/E0F2F7/000000?text=Raw+Materials', // Placeholder image
    },
    {
      name: 'Components',
      description: 'Electronic parts, circuits, and assemblies',
      imageUrl: 'https://placehold.co/400x250/E0F2F7/000000?text=Components', // Placeholder image
    },
    {
      name: 'Machinery',
      description: 'Industrial equipment and tools',
      imageUrl: 'https://placehold.co/400x250/E0F2F7/000000?text=Machinery', // Placeholder image
    },
    // Add more categories as needed, matching the image or your data
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-48 object-cover object-center"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Error'; }} // Fallback
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
