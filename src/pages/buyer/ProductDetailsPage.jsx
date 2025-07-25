import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'; // For product details sections
import { Heart, MessageSquare, ShoppingCart, Tag } from 'lucide-react'; // Icons

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  // Dummy product data (replace with actual data fetching later)
  const product = {
    id: productId,
    name: 'High-Grade Steel Coils',
    description: 'Excess prime steel coils, various gauges available. Ideal for construction and heavy manufacturing. Certified to IS 2062:2011 standards.',
    longDescription: 'These are high-quality, excess prime steel coils, perfect for immediate industrial use. Available in various gauges and widths to suit diverse manufacturing needs. Each coil comes with full documentation and quality certifications, ensuring reliability and performance. Stored in a climate-controlled warehouse, they are free from rust and damage. Bulk discounts available for large orders.',
    images: [
      'https://placehold.co/800x600/C8E6C9/000000?text=Steel+Coil+1',
      'https://placehold.co/800x600/B2DFDB/000000?text=Steel+Coil+2',
      'https://placehold.co/800x600/A5D6A7/000000?text=Steel+Coil+3',
    ],
    price: '₹55,000 / Ton',
    minOrderQuantity: '5 Tons',
    availableQuantity: '100 Tons',
    condition: 'New',
    category: 'Raw Materials',
    seller: {
      name: 'MetalFab India',
      rating: 4.8,
      verified: true,
      location: 'Pune, Maharashtra',
    },
    specifications: [
      { label: 'Material', value: 'Mild Steel' },
      { label: 'Grade', value: 'IS 2062 E250BR' },
      { label: 'Thickness', value: '2mm - 10mm' },
      { label: 'Width', value: '1000mm - 1500mm' },
      { label: 'Coil Weight', value: '5-10 Tons' },
      { label: 'Certifications', value: 'ISO 9001, IS 2062:2011' },
    ],
    returnPolicy: '30-day return policy for manufacturing defects.',
    shippingInfo: 'Seller-managed shipping, pan-India delivery available. Buyer can arrange pickup.',
  };

  // If product not found (in a real app, you'd fetch from API and handle 404)
  if (!product.id) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Product Not Found</h1>
        <p className="text-gray-600">The product you are looking for does not exist.</p>
        <Button onClick={() => navigate('/search-inventory')} className="mt-6">Back to Search</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumbs or Back button */}
        <Button variant="link" onClick={() => navigate(-1)} className="text-blue-600 hover:underline px-0">
          &larr; Back to Search Results
        </Button>

        {/* Product Overview Section */}
        <Card className="p-6 rounded-lg shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 object-cover object-center rounded-lg shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/cccccc/000000?text=Image+Error'; }}
            />
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-24 h-24 object-cover object-center rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors duration-200"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/cccccc/000000?text=Thumb'; }}
                />
              ))}
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 text-lg">{product.description}</p>

            <div className="flex items-baseline space-x-4">
              <p className="text-4xl font-extrabold text-blue-600">{product.price}</p>
              <span className="text-gray-500">({product.minOrderQuantity} Minimum Order)</span>
            </div>

            <div className="space-y-2 text-gray-700">
              <p><strong>Available:</strong> {product.availableQuantity}</p>
              <p><strong>Condition:</strong> <span className="font-semibold text-green-700">{product.condition}</span></p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>

            {/* Seller Info */}
            <Card className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <div className="flex items-center space-x-3">
                <img src="https://placehold.co/40x40/AEC6CF/FFFFFF?text=MF" alt={product.seller.name} className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-800">{product.seller.name}</p>
                  <p className="text-sm text-gray-600">
                    Rating: {product.seller.rating} / 5 {product.seller.verified && <span className="text-green-600 ml-1">(Verified)</span>}
                  </p>
                  <p className="text-sm text-gray-500">{product.seller.location}</p>
                </div>
              </div>
              <Button variant="link" className="text-blue-600 hover:underline mt-2 px-0" onClick={() => console.log('View Seller Profile')}>
                View Seller Profile
              </Button>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="flex-grow bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 text-lg">
                <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" className="flex-grow border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md py-3 text-lg">
                <Tag className="h-5 w-5 mr-2" /> Make Offer
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full self-center">
                <Heart className="h-6 w-6 text-gray-500 hover:text-red-500" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full self-center">
                <MessageSquare className="h-6 w-6 text-gray-500 hover:text-blue-500" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="description" className="w-full mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="policies">Policies & Shipping</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="bg-white p-6 rounded-b-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
          </TabsContent>
          <TabsContent value="specifications" className="bg-white p-6 rounded-b-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.specifications.map((spec, index) => (
                <li key={index}><strong>{spec.label}:</strong> {spec.value}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="policies" className="bg-white p-6 rounded-b-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Return Policy & Shipping</h3>
            <p className="text-gray-700 mb-4">{product.returnPolicy}</p>
            <p className="text-gray-700">{product.shippingInfo}</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailPage;
