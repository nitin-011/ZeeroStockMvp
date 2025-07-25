import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input'; // Used for display, but disabled
import { User, Building2, Mail, Phone, MapPin } from 'lucide-react'; // Icons

const BuyerProfilePage = () => {
  const navigate = useNavigate();

  // Dummy buyer profile data
  const buyerProfile = {
    fullName: 'Priya Singh',
    email: 'priya.singh@example.com',
    phone: '+91 98765 12345',
    companyName: 'TechSolutions India Pvt Ltd',
    companyAddress: '101, Cyber City, Phase 8, Mohali, Punjab',
    businessType: 'Electronics Manufacturer',
    kycVerified: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Card className="p-6 rounded-lg shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
              <User className="h-6 w-6 mr-2" /> My Profile
            </CardTitle>
            <CardDescription className="text-gray-600">
              View and manage your personal and company information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" value={buyerProfile.fullName} disabled className="rounded-md bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" value={buyerProfile.email} disabled className="rounded-md bg-gray-50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={buyerProfile.phone} disabled className="rounded-md bg-gray-50" />
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xl font-semibold text-gray-800">Company Details</h3>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" value={buyerProfile.companyName} disabled className="rounded-md bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Input id="companyAddress" value={buyerProfile.companyAddress} disabled className="rounded-md bg-gray-50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Input id="businessType" value={buyerProfile.businessType} disabled className="rounded-md bg-gray-50" />
              </div>
              <div className="flex items-center space-x-2">
                <Label>KYC/KYB Status:</Label>
                <span className={`font-semibold ${buyerProfile.kycVerified ? 'text-green-600' : 'text-yellow-600'}`}>
                  {buyerProfile.kycVerified ? 'Verified' : 'Pending'}
                </span>
                <Button variant="link" size="sm" onClick={() => navigate('/buyer/kyc-status')}>
                  View KYC Status
                </Button>
              </div>
            </div>

            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 text-base mt-8"
              onClick={() => navigate('/buyer/profile-setup')} // Navigate to profile setup page
            >
              Edit Profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerProfilePage;
