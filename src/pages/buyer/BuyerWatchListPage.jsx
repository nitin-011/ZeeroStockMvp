import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { EyeOff, ShoppingCart, ExternalLink } from 'lucide-react'; // Icons

const BuyerWatchlistPage = () => {
  const navigate = useNavigate();

  // Dummy data for watchlist items
  const watchlistItems = [
    {
      id: 'wl-001',
      name: 'SMD Capacitors 1000pF',
      description: 'High-quality surface mount capacitors, 0805 package.',
      price: '₹0.05 / Unit',
      quantity: '100,000 units available',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Capacitors',
      seller: 'ElectroParts India',
    },
    {
      id: 'wl-002',
      name: 'Industrial Servo Motor',
      description: '2kW AC Servo Motor with integrated drive.',
      price: '₹245.00 / Unit',
      quantity: '5 units available',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Servo+Motor',
      seller: 'Automation Solutions',
    },
    {
      id: 'wl-003',
      name: 'Aluminium Extrusions',
      description: 'Standard T-slot aluminium profiles, 6063-T5 alloy.',
      price: '₹180 / Kg',
      quantity: '500 Kg available',
      imageUrl: 'https://placehold.co/400x250/F0F9FF/000000?text=Aluminium',
      seller: 'AluFab Systems',
    },
  ];

  const handleRemoveFromWatchlist = (itemId) => {
    console.log(`Removing item ${itemId} from watchlist.`);
    // In a real application, this would dispatch a Redux action
    // or make an API call to update the user's watchlist.
    // You'd also update the local state to reflect the change.
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">My Watchlist</CardTitle>
            <CardDescription className="text-gray-600">
              Items you've saved for future consideration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {watchlistItems.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">Your watchlist is empty.</p>
                <Button onClick={() => navigate('/search-inventory')}>
                  Start Browsing Inventory
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {watchlistItems.map((item) => (
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
                      <p className="text-sm text-gray-700">{item.quantity}</p>
                      <p className="text-sm text-gray-700">Seller: {item.seller}</p>
                      <div className="flex gap-2 mt-4">
                        <Button
                          className="flex-grow bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-sm"
                          onClick={() => navigate(`/product/${item.id}`)}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="shrink-0 border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => handleRemoveFromWatchlist(item.id)}
                          aria-label="Remove from watchlist"
                        >
                          <EyeOff className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerWatchlistPage;
