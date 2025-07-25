import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { SlidersHorizontal, ChevronDown, Sparkles } from 'lucide-react'; // Icons for filter and recommendations

const SearchInventoryPage = () => {
  const navigate = useNavigate();

  // Dummy data for filters
  const categories = ['Raw Materials', 'Components', 'Machinery', 'Packaging', 'Chemicals', 'Electronics'];
  const conditions = ['New', 'Used - Like New', 'Used - Good', 'Used - Fair'];
  const regions = ['North India', 'South India', 'East India', 'West India', 'Central India'];

  // Dummy data for search results
  const searchResults = [
    {
      id: 'item-001',
      name: 'High-Grade Steel Coils',
      description: 'Excess prime steel coils, various gauges available.',
      price: '₹55,000 / Ton',
      quantity: '100 Tons',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/000000?text=Steel+Coils',
      seller: 'MetalFab India',
    },
    {
      id: 'item-002',
      name: 'Electronic Microcontrollers',
      description: 'Batch of unused ATmega328P microcontrollers.',
      price: '₹120 / Unit',
      quantity: '5000 Units',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/000000?text=Microcontrollers',
      seller: 'ElectroCorp Pvt Ltd',
    },
    {
      id: 'item-003',
      name: 'Industrial Bearings (SKF)',
      description: 'Assorted SKF bearings, new in box.',
      price: '₹800 / Piece',
      quantity: '500 Pieces',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/000000?text=Bearings',
      seller: 'Precision Parts Co.',
    },
    {
      id: 'item-004',
      name: 'Plastic Granules (HDPE)',
      description: 'Virgin HDPE granules, natural color.',
      price: '₹95 / Kg',
      quantity: '20 Tons',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/000000?text=Plastic+Granules',
      seller: 'PolyChem Solutions',
    },
    {
      id: 'item-005',
      name: 'CNC Machine Spares',
      description: 'Various spare parts for XYZ brand CNC machines.',
      price: '₹15,000',
      quantity: '1 Lot',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/000000?text=CNC+Spares',
      seller: 'MechTools India',
    },
    {
      id: 'item-006',
      name: 'Packaging Cartons (Custom Size)',
      description: 'Overstock of custom-sized corrugated cartons.',
      price: '₹15 / Piece',
      quantity: '10000 Pieces',
      imageUrl: 'https://placehold.co/400x250/C8E6C9/000000?text=Cartons',
      seller: 'PackRight Solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search Bar and Filters */}
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">Search Inventory</CardTitle>
            <CardDescription className="text-gray-600">Find the excess manufacturing inventory you need.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Search Input */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Search by part number, category, or keyword..."
                className="flex-grow rounded-md px-4 py-2 text-gray-700"
                aria-label="Search inventory"
              />
              <Button className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2">
                Search
              </Button>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map(cond => <SelectItem key={cond} value={cond.toLowerCase().replace(/\s/g, '-')}>{cond}</SelectItem>)}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map(reg => <SelectItem key={reg} value={reg.toLowerCase().replace(/\s/g, '-')}>{reg}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            {/* More filter options can be added here, e.g., price range, quantity, certifications */}
            <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center rounded-md border-gray-300 text-gray-700 hover:bg-gray-50">
                <SlidersHorizontal className="h-4 w-4 mr-2" /> More Filters
            </Button>
          </CardContent>
        </Card>

        {/* Search Results */}
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchResults.map((item) => (
            <Card key={item.id} className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover object-center"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/cccccc/000000?text=Image+Error'; }} // Fallback
              />
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg font-semibold text-gray-800">{item.name}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-2">
                <p className="text-xl font-bold text-blue-600">{item.price}</p>
                <p className="text-sm text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-700">Seller: {item.seller}</p>
                <Button
                  className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm"
                  onClick={() => navigate(`/product/${item.id}`)} // Navigate to product detail page
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personalized Recommendations (Optional section, similar to homepage) */}
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
            <Sparkles className="h-6 w-6 text-yellow-500 mr-2" /> Personalized Recommendations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Placeholder for recommended items */}
            {searchResults.slice(0, 4).map((item) => ( // Reusing some search results for recommendations
                <Card key={`rec-${item.id}`} className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-48 object-cover object-center"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0F2F7/000000?text=Recommended'; }}
                    />
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg font-semibold text-gray-800">{item.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-500">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                        <p className="text-xl font-bold text-blue-600">{item.price}</p>
                        <Button
                            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 text-sm"
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            View Item
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>

      </div>
    </div>
  );
};

export default SearchInventoryPage;
