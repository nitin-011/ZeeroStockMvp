import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

const RequestQuotePage = () => {
  const navigate = useNavigate();

  // Dummy data for categories for the select input
  const categories = ['Raw Materials', 'Components', 'Machinery', 'Packaging', 'Chemicals', 'Electronics', 'Other'];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">Request for Quote (RFQ)</CardTitle>
            <CardDescription className="text-gray-600">
              Submit a request for a custom quote for specific items or bulk needs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="itemName">Item Name / Part Number</Label>
                <Input
                  id="itemName"
                  type="text"
                  placeholder="e.g., Stainless Steel Sheets, XYZ-123 Bearing"
                  required
                  className="rounded-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category" className="rounded-md">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Required Quantity</Label>
                <Input
                  id="quantity"
                  type="text"
                  placeholder="e.g., 500 units, 10 tons, 1 lot"
                  required
                  className="rounded-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specifications">Detailed Specifications / Requirements</Label>
                <Textarea
                  id="specifications"
                  placeholder="Provide detailed information about the item, including dimensions, material grade, condition, certifications, etc."
                  rows={5}
                  className="rounded-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deliveryDate">Desired Delivery Date (Optional)</Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  className="rounded-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactEmail">Your Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  placeholder="Enter your email for communication"
                  required
                  className="rounded-md"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base">
                Submit RFQ
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Your request will be sent to relevant sellers who can provide a quote.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RequestQuotePage;
