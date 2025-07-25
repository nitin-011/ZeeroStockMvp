import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Checkbox } from '../../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Separator } from '../../components/ui/separator';
import { Truck, CreditCard, CheckSquare } from 'lucide-react'; // Icons

const BuyerCheckoutPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1); // 1: Shipping, 2: Payment, 3: Review
  const [shippingAddress, setShippingAddress] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  });
  const [selectedShippingMethod, setSelectedShippingMethod] = useState('standard');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit_card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  // Dummy cart items for checkout summary
  const cartItems = [
    { id: 'item-001', name: 'High-Grade Steel Coils', pricePerUnit: 55000, quantity: 1, unit: 'Ton' },
    { id: 'item-002', name: 'Electronic Microcontrollers', pricePerUnit: 120, quantity: 100, unit: 'Unit' },
  ];

  const shippingMethods = [
    { id: 'standard', name: 'Standard Shipping (5-7 business days)', cost: 500 },
    { id: 'express', name: 'Express Shipping (2-3 business days)', cost: 1500 },
  ];

  const calculateSubtotal = () => cartItems.reduce((total, item) => total + (item.pricePerUnit * item.quantity), 0);
  const calculateShippingCost = () => shippingMethods.find(method => method.id === selectedShippingMethod)?.cost || 0;
  const calculateTotal = () => calculateSubtotal() + calculateShippingCost();
  const formattedPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  const handleNext = () => {
    // Basic validation before moving to next step
    if (currentStep === 1) {
      if (!shippingAddress.fullName || !shippingAddress.addressLine1 || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zipCode) {
        alert('Please fill in all required shipping details.'); // Replace with Shadcn Toast/Dialog
        return;
      }
    } else if (currentStep === 2) {
      if (selectedPaymentMethod === 'credit_card' && (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv)) {
        alert('Please fill in all required card details.'); // Replace with Shadcn Toast/Dialog
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePlaceOrder = () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions.'); // Replace with Shadcn Toast/Dialog
      return;
    }
    console.log('Placing order with:', {
      shippingAddress,
      selectedShippingMethod,
      selectedPaymentMethod,
      // In a real app, send actual payment token, not raw card details
    });
    // Simulate order placement
    alert('Order placed successfully! Redirecting to order confirmation.'); // Replace with Shadcn Toast/Dialog
    navigate('/buyer/my-orders'); // Redirect to orders page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">Checkout</CardTitle>
            <CardDescription className="text-gray-600">
              Complete your purchase in a few easy steps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-8">
              <div className={`flex flex-col items-center flex-1 ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
                <span className="text-sm mt-2">Shipping</span>
              </div>
              <div className={`flex-1 h-1 bg-gray-200 ${currentStep > 1 ? 'bg-blue-600' : ''}`}></div>
              <div className={`flex flex-col items-center flex-1 ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
                <span className="text-sm mt-2">Payment</span>
              </div>
              <div className={`flex-1 h-1 bg-gray-200 ${currentStep > 2 ? 'bg-blue-600' : ''}`}></div>
              <div className={`flex flex-col items-center flex-1 ${currentStep >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
                <span className="text-sm mt-2">Review</span>
              </div>
            </div>

            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center"><Truck className="h-5 w-5 mr-2" /> Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" type="text" value={shippingAddress.fullName} onChange={(e) => setShippingAddress({ ...shippingAddress, fullName: e.target.value })} required className="rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="addressLine1">Address Line 1</Label>
                    <Input id="addressLine1" type="text" value={shippingAddress.addressLine1} onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine1: e.target.value })} placeholder="Street address, P.O. Box" required className="rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                  <Input id="addressLine2" type="text" value={shippingAddress.addressLine2} onChange={(e) => setShippingAddress({ ...shippingAddress, addressLine2: e.target.value })} placeholder="Apartment, suite, unit, building, floor, etc." className="rounded-md" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" type="text" value={shippingAddress.city} onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })} required className="rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" type="text" value={shippingAddress.state} onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })} required className="rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" type="text" value={shippingAddress.zipCode} onChange={(e) => setShippingAddress({ ...shippingAddress, zipCode: e.target.value })} required className="rounded-md" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" type="text" value={shippingAddress.country} disabled className="rounded-md bg-gray-50" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 flex items-center mt-8"><Truck className="h-5 w-5 mr-2" /> Shipping Method</h3>
                <RadioGroup value={selectedShippingMethod} onValueChange={setSelectedShippingMethod} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {shippingMethods.map(method => (
                    <Label key={method.id} htmlFor={method.id} className="flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <span>{method.name}</span>
                      </div>
                      <span className="font-semibold">{formattedPrice(method.cost)}</span>
                    </Label>
                  ))}
                </RadioGroup>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base mt-8" onClick={handleNext}>
                  Continue to Payment
                </Button>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center"><CreditCard className="h-5 w-5 mr-2" /> Payment Method</h3>
                <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod} className="space-y-4">
                  <Label htmlFor="credit_card" className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="credit_card" id="credit_card" />
                    <span>Credit/Debit Card</span>
                  </Label>
                  {selectedPaymentMethod === 'credit_card' && (
                    <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" type="text" placeholder="XXXX XXXX XXXX XXXX" value={cardDetails.cardNumber} onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} required className="rounded-md" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" type="text" placeholder="John Doe" value={cardDetails.cardName} onChange={(e) => setCardDetails({ ...cardDetails, cardName: e.target.value })} required className="rounded-md" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input id="expiryDate" type="text" placeholder="MM/YY" value={cardDetails.expiryDate} onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} required className="rounded-md" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" type="text" placeholder="XXX" value={cardDetails.cvv} onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} required className="rounded-md" />
                        </div>
                      </div>
                    </div>
                  )}

                  <Label htmlFor="net_banking" className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="net_banking" id="net_banking" />
                    <span>Net Banking</span>
                  </Label>
                  {selectedPaymentMethod === 'net_banking' && (
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <p className="text-gray-600">You will be redirected to your bank's website to complete the payment.</p>
                    </div>
                  )}

                  <Label htmlFor="upi" className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="upi" id="upi" />
                    <span>UPI</span>
                  </Label>
                  {selectedPaymentMethod === 'upi' && (
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <div className="space-y-2">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input id="upiId" type="text" placeholder="yourname@bankupi" className="rounded-md" />
                      </div>
                    </div>
                  )}
                </RadioGroup>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handleBack} className="rounded-md py-2 text-base">
                    Back to Shipping
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base" onClick={handleNext}>
                    Continue to Review
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center"><CheckSquare className="h-5 w-5 mr-2" /> Order Review</h3>

                {/* Items Review */}
                <Card className="p-4 rounded-lg bg-gray-50">
                  <CardTitle className="text-lg font-semibold mb-3">Items in Cart</CardTitle>
                  <ul className="space-y-2">
                    {cartItems.map(item => (
                      <li key={item.id} className="flex justify-between text-gray-700 text-sm">
                        <span>{item.name} ({item.quantity} {item.unit})</span>
                        <span>{formattedPrice(item.pricePerUnit * item.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Shipping Review */}
                <Card className="p-4 rounded-lg bg-gray-50">
                  <CardTitle className="text-lg font-semibold mb-3">Shipping Details</CardTitle>
                  <address className="not-italic text-gray-700 text-sm space-y-1">
                    <p>{shippingAddress.fullName}</p>
                    <p>{shippingAddress.addressLine1}</p>
                    {shippingAddress.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                    <p>{shippingAddress.city}, {shippingAddress.state} - {shippingAddress.zipCode}</p>
                    <p>{shippingAddress.country}</p>
                  </address>
                  <p className="text-sm text-gray-700 mt-2">Method: {shippingMethods.find(m => m.id === selectedShippingMethod)?.name}</p>
                </Card>

                {/* Payment Review */}
                <Card className="p-4 rounded-lg bg-gray-50">
                  <CardTitle className="text-lg font-semibold mb-3">Payment Method</CardTitle>
                  <p className="text-gray-700 text-sm">
                    {selectedPaymentMethod === 'credit_card' && `Credit/Debit Card ending in ${cardDetails.cardNumber.slice(-4)}`}
                    {selectedPaymentMethod === 'net_banking' && 'Net Banking'}
                    {selectedPaymentMethod === 'upi' && 'UPI'}
                  </p>
                </Card>

                {/* Order Summary */}
                <Card className="p-4 rounded-lg shadow-sm">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-4">Order Summary</CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Subtotal:</span>
                      <span>{formattedPrice(calculateSubtotal())}</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>Shipping:</span>
                      <span>{formattedPrice(calculateShippingCost())}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg text-gray-900">
                      <span>Total:</span>
                      <span>{formattedPrice(calculateTotal())}</span>
                    </div>
                  </div>
                </Card>

                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="agreeTerms" checked={agreeToTerms} onCheckedChange={setAgreeToTerms} />
                  <Label htmlFor="agreeTerms" className="text-sm">
                    I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                  </Label>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={handleBack} className="rounded-md py-2 text-base">
                    Back to Payment
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base" onClick={handlePlaceOrder}>
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerCheckoutPage;
