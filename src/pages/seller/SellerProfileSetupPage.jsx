import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { User, Building2, Mail, Phone, MapPin } from 'lucide-react'; // Icons

const SellerProfileSetupPage = () => {
  const navigate = useNavigate();

  // Dummy state for form fields (pre-filled for editing scenario)
  const [profile, setProfile] = useState({
    fullName: 'Ravi Kumar',
    email: 'ravi.kumar@example.com', // Often not editable via profile setup
    phone: '+91 99887 76655',
    companyName: 'Sunrise Manufacturing Pvt Ltd',
    businessType: 'Textile Mill',
    gstin: '27ABCDE1234F1Z5',
    addressLine1: 'Plot No. 45',
    addressLine2: 'Industrial Area, Phase 1',
    city: 'Gurgaon',
    state: 'Haryana',
    zipCode: '122001',
    logisticsCapability: 'Pan-India Shipping, Buyer Pickup',
  });

  const businessTypes = [
    'Electronics Manufacturer', 'Automotive Supplier', 'Textile Mill',
    'Chemical Producer', 'Machinery & Equipment', 'Packaging Solutions',
    'Raw Material Supplier', 'Other'
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleSelectChange = (value, field) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving Seller Profile:', profile);
    // In a real application, send this data to your backend API
    alert('Seller profile updated successfully!'); // Replace with Shadcn Toast/Dialog
    navigate('/seller-dashboard'); // Redirect to dashboard or a seller profile view
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <User className="h-6 w-6 mr-2" /> Setup Your Seller Profile
            </CardTitle>
            <CardDescription className="text-gray-600">
              Provide your business and contact details to optimize your selling experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Person Details */}
              <h3 className="text-xl font-semibold text-gray-800">Contact Person Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" type="text" value={profile.fullName} onChange={handleInputChange} required className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" value={profile.email} disabled className="rounded-md bg-gray-50" />
                  <p className="text-xs text-gray-500">Email is typically not editable here.</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={profile.phone} onChange={handleInputChange} required className="rounded-md" />
              </div>

              {/* Company Details */}
              <h3 className="text-xl font-semibold text-gray-800 mt-8">Company Details</h3>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" type="text" value={profile.companyName} onChange={handleInputChange} required className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Select value={profile.businessType} onValueChange={(value) => handleSelectChange(value, 'businessType')}>
                  <SelectTrigger id="businessType" className="rounded-md">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstin">GSTIN</Label>
                <Input id="gstin" type="text" value={profile.gstin} onChange={handleInputChange} placeholder="e.g., 27ABCDE1234F1Z5" required className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addressLine1">Address Line 1</Label>
                <Input id="addressLine1" type="text" value={profile.addressLine1} onChange={handleInputChange} placeholder="Street address, P.O. Box" required className="rounded-md" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
                <Input id="addressLine2" type="text" value={profile.addressLine2} onChange={handleInputChange} placeholder="Apartment, suite, unit, building, floor, etc." className="rounded-md" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" type="text" value={profile.city} onChange={handleInputChange} required className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" type="text" value={profile.state} onChange={handleInputChange} required className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input id="zipCode" type="text" value={profile.zipCode} onChange={handleInputChange} required className="rounded-md" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="logisticsCapability">Logistics Capabilities (Optional)</Label>
                <Input id="logisticsCapability" type="text" value={profile.logisticsCapability} onChange={handleInputChange} placeholder="e.g., Pan-India shipping, Buyer pickup only" className="rounded-md" />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base mt-8">
                Save Seller Profile
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SellerProfileSetupPage;
