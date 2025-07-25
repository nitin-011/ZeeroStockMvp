import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Trash2, ShoppingCart } from 'lucide-react'; // Icons

const BuyerCartPage = () => {
  const navigate = useNavigate();

  // Dummy cart items state
  const [cartItems, setCartItems] = useState([
    {
      id: 'item-001',
      name: 'High-Grade Steel Coils',
      description: 'Excess prime steel coils',
      pricePerUnit: 55000, // in INR
      unit: 'Ton',
      quantity: 1,
      minOrderQuantity: 1,
      imageUrl: 'https://placehold.co/100x100/C8E6C9/000000?text=Steel',
      seller: 'MetalFab India',
    },
    {
      id: 'item-002',
      name: 'Electronic Microcontrollers',
      description: 'Batch of unused ATmega328P',
      pricePerUnit: 120, // in INR
      unit: 'Unit',
      quantity: 100,
      minOrderQuantity: 10,
      imageUrl: 'https://placehold.co/100x100/B2DFDB/000000?text=Micro',
      seller: 'ElectroCorp Pvt Ltd',
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(item.minOrderQuantity, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
  };

  const formattedPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <ShoppingCart className="h-6 w-6 mr-2" /> Your Shopping Cart
            </CardTitle>
            <CardDescription className="text-gray-600">
              Review your selected items before proceeding to checkout.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {cartItems.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg mb-4">Your cart is empty.</p>
                <Button onClick={() => navigate('/search-inventory')}>
                  Start Browsing Inventory
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items Table */}
                <div className="lg:col-span-2">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Product</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className="font-medium">
                            <img src={item.imageUrl} alt={item.name} className="h-16 w-16 object-cover rounded-md mr-2 inline-block" />
                            {item.name}
                          </TableCell>
                          <TableCell>{item.description}</TableCell>
                          <TableCell>{formattedPrice(item.pricePerUnit)} / {item.unit}</TableCell>
                          <TableCell className="text-center">
                            <Input
                              type="number"
                              min={item.minOrderQuantity}
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-24 text-center rounded-md"
                            />
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            {formattedPrice(item.pricePerUnit * item.quantity)}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} aria-label="Remove item">
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Cart Summary */}
                <Card className="p-6 rounded-lg shadow-sm h-fit">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Order Summary</CardTitle>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal:</span>
                      <span>{formattedPrice(calculateSubtotal())}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping:</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-4 mt-4">
                      <span>Total:</span>
                      <span>{formattedPrice(calculateSubtotal())}</span>
                    </div>
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base mt-6"
                      onClick={() => navigate('/buyer/checkout')}
                    >
                      Proceed to Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full mt-2 rounded-md py-2 text-base"
                      onClick={() => navigate('/search-inventory')}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerCartPage;
